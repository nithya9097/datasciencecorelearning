 "use client";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "../../../../lib/supabase";

export default function LessonProgress({ moduleId, lessonId }: { moduleId: string; lessonId: string }) {
  const supabase = useMemo(() => {
    try { return createClient(); } catch { return null; }
  }, []);
  const [userId, setUserId] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      if (!supabase) { setLoading(false); setMessage("Connect Supabase to save your learning progress."); return; }
      const { data: { user } } = await supabase.auth.getUser();
      if (!active) return;
      setUserId(user?.id ?? null);
      if (!user) { setLoading(false); setMessage("Sign in from the homepage to save completed lessons."); return; }
      const { data, error } = await supabase.from("user_lesson_progress").select("completed").eq("user_id", user.id).eq("lesson_id", lessonId).maybeSingle();
      if (!active) return;
      if (error) setMessage("Could not load progress. Apply migration 002 and refresh this page.");
      else setCompleted(Boolean(data?.completed));
      setLoading(false);
    }
    void load();
    return () => { active = false; };
  }, [supabase, lessonId]);

  async function toggle() {
    if (!supabase || !userId) {
      setMessage("Please sign in on the homepage before saving lesson progress.");
      return;
    }
    setLoading(true); setMessage("");
    const next = !completed;
    const { error } = await supabase.from("user_lesson_progress").upsert({
      user_id: userId, module_id: moduleId, lesson_id: lessonId,
      completed: next, completed_at: next ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,lesson_id" });
    if (error) setMessage("Progress was not saved. Check that migration 002 has been run in Supabase.");
    else setCompleted(next);
    setLoading(false);
  }

  return <section className="lessonCompletion">
    <div><strong>{completed ? "Lesson completed" : "Ready to finish this lesson?"}</strong><p>{completed ? "Your progress is saved to your account." : "Mark this lesson complete after you understand the example and try the exercise."}</p></div>
    <button className={`button ${completed ? "secondary" : "primary"}`} onClick={toggle} disabled={loading}>{loading ? "Saving…" : completed ? "✓ Completed — undo" : "Mark lesson complete"}</button>
    {message ? <p className="progressMessage" role="status">{message}</p> : null}
  </section>;
}
