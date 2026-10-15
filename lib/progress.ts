"use client";

import { useSyncExternalStore } from "react";

const KEY = "dsc-progress-v1";
const EMPTY: Record<string, number> = {};

// key -> completion timestamp.  Keys: "lesson:<moduleId>/<lessonId>" and "question:<id>"
let cache: Record<string, number> = EMPTY;
let cacheRaw: string | null = null;
const listeners = new Set<() => void>();

function read() {
  if (typeof window === "undefined") return EMPTY;
  let raw: string | null = null;
  try { raw = localStorage.getItem(KEY); } catch { return cache; }
  if (raw === cacheRaw) return cache;
  cacheRaw = raw;
  try { cache = raw ? JSON.parse(raw) : EMPTY; } catch { cache = EMPTY; }
  return cache;
}

function write(next: Record<string, number>) {
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export const lessonKey = (moduleId: string, lessonId: string) =>
  `lesson:${moduleId}/${lessonId}`;
export const questionKey = (id: string) => `question:${id}`;

export function useProgress() {
  const done = useSyncExternalStore(subscribe, read, () => EMPTY);

  const isDone = (key: string) => key in done;

  const toggle = (key: string) => {
    const next = { ...read() };
    if (key in next) delete next[key];
    else next[key] = Date.now();
    write(next);
  };

  const reset = () => write({});

  // consecutive days (ending today or yesterday) with at least one completion
  const streak = (() => {
    const days = new Set(
      Object.values(done).map((t) => new Date(t).toDateString())
    );
    let count = 0;
    const d = new Date();
    if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
    while (days.has(d.toDateString())) {
      count++;
      d.setDate(d.getDate() - 1);
    }
    return count;
  })();

  return { done, isDone, toggle, reset, streak };
}