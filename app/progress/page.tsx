import Link from "next/link";
import { curriculum } from "../../lib/curriculum";
import { interviewQuestions } from "../../lib/interviewQuestions";
import ProgressDashboard from "./ProgressDashboard";

export default function ProgressPage() {
  const modules = curriculum.map((m) => ({
    id: m.id,
    title: m.title,
    stage: m.stage,
    lessons: m.lessons.map((l) => ({ id: l.id, title: l.title })),
  }));

  return (
    <main className="pageShell">
      <header className="lessonNav">
        <Link className="brand" href="/">▥ DataSciencePath</Link>
        <Link className="backLink" href="/">← Home</Link>
      </header>
      <div className="pageMain">
        <p className="eyebrow">YOUR JOURNEY</p>
        <h1>Progress Tracker</h1>
        <p className="muted">Lessons and interview questions you've completed.</p>
        <ProgressDashboard
          modules={modules}
          questionIds={interviewQuestions.map((q) => q.id)}
        />
      </div>
    </main>
  );
}