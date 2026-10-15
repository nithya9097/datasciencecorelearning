"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  interviewQuestions,
  interviewCategories,
  type Difficulty,
} from "../../lib/interviewQuestions";
import { useProgress, questionKey } from "../../lib/progress";

export default function InterviewPage() {
  const { isDone, toggle } = useProgress();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState<"All" | Difficulty>("All");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  // Pre-select a category when arriving from /interview?category=SQL
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && (interviewCategories as readonly string[]).includes(c)) {
      setCategory(c);
    }
  }, []);

  const practiced = interviewQuestions.filter((q) =>
    isDone(questionKey(q.id))
  ).length;

  const filtered = useMemo(
    () =>
      interviewQuestions.filter(
        (q) =>
          (category === "All" || q.category === category) &&
          (difficulty === "All" || q.difficulty === difficulty) &&
          q.question.toLowerCase().includes(search.toLowerCase())
      ),
    [search, category, difficulty]
  );

  return (
    <main className="pageShell">
      <header className="lessonNav">
        <Link className="brand" href="/">
          ▥ DataSciencePath
        </Link>
        <Link className="backLink" href="/">
          ← Home
        </Link>
      </header>

      <div className="pageMain">
        <p className="eyebrow">INTERVIEW PREP</p>
        <h1>Most Asked Interview Questions</h1>
        <p className="muted">
          {practiced} / {interviewQuestions.length} practiced
        </p>

        <div className="ivFilters">
          <input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            {interviewCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as "All" | Difficulty)}
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {filtered.map((q) => (
          <div key={q.id} className="ivCard">
            <div className="ivTop">
              <div>
                <span className={`ivBadge ${q.difficulty.toLowerCase()}`}>
                  {q.difficulty}
                </span>
                <span className="ivCat">{q.category}</span>
                <h3>{q.question}</h3>
              </div>
              <label className="ivDone">
                <input
                  type="checkbox"
                  checked={isDone(questionKey(q.id))}
                  onChange={() => toggle(questionKey(q.id))}
                />
                Done
              </label>
            </div>
            <button
              className="textButton"
              onClick={() => setOpen((o) => ({ ...o, [q.id]: !o[q.id] }))}
            >
              {open[q.id] ? "Hide answer" : "Show answer"}
            </button>
            {open[q.id] && <p className="ivAnswer">{q.answer}</p>}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="muted">No questions match your filters.</p>
        )}
      </div>
    </main>
  );
}