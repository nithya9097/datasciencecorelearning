"use client";

import Link from "next/link";
import { useProgress, lessonKey, questionKey } from "../../lib/progress";

type Mod = {
  id: string;
  title: string;
  stage: string;
  lessons: { id: string; title: string }[];
};

export default function ProgressDashboard({
  modules,
  questionIds,
}: {
  modules: Mod[];
  questionIds: string[];
}) {
  const { isDone, streak, reset } = useProgress();

  const stats = modules.map((m) => ({
    m,
    done: m.lessons.filter((l) => isDone(lessonKey(m.id, l.id))).length,
    total: m.lessons.length,
  }));
  const totalLessons = stats.reduce((s, x) => s + x.total, 0);
  const doneLessons = stats.reduce((s, x) => s + x.done, 0);
  const overall = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;
  const doneQs = questionIds.filter((id) => isDone(questionKey(id))).length;

  let next: { moduleId: string; lessonId: string; title: string } | null = null;
  for (const m of modules) {
    const l = m.lessons.find((l) => !isDone(lessonKey(m.id, l.id)));
    if (l) { next = { moduleId: m.id, lessonId: l.id, title: l.title }; break; }
  }

  const stages = Array.from(new Set(modules.map((m) => m.stage)));

  return (
    <>
      <div className="statGrid">
        <div className="statBox"><strong>{overall}%</strong><span>Overall</span></div>
        <div className="statBox"><strong>{doneLessons}/{totalLessons}</strong><span>Lessons</span></div>
        <div className="statBox"><strong>{doneQs}/{questionIds.length}</strong><span>Interview Qs</span></div>
        <div className="statBox"><strong>{streak} 🔥</strong><span>Day streak</span></div>
      </div>

      <div className="progressTrack"><i style={{ width: `${overall}%` }} /></div>

      {next && (
        <Link href={`/learn/${next.moduleId}/${next.lessonId}`} className="continueCard">
          <small>CONTINUE LEARNING</small>
          <strong>{next.title} →</strong>
        </Link>
      )}

      {stages.map((stage) => (
        <section key={stage} className="pgStage">
          <h2>{stage}</h2>
          {stats.filter((x) => x.m.stage === stage).map(({ m, done, total }) => (
            <details key={m.id} className="pgModule">
              <summary>
                <span>{m.title}</span>
                <b>{done}/{total}</b>
                <div className="progressTrack">
                  <i style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
                </div>
              </summary>
              <ul>
                {m.lessons.map((l) => (
                  <li key={l.id}>
                    <Link href={`/learn/${m.id}/${l.id}`}>
                      {isDone(lessonKey(m.id, l.id)) ? "✅" : "⬜"} {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </section>
      ))}

      <button
        className="textButton"
        onClick={() => confirm("Reset all progress?") && reset()}
      >
        Reset progress
      </button>
    </>
  );
}