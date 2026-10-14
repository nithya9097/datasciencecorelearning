import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculum, getLesson, getModule } from "../../../../lib/curriculum";
import LessonProgress from "./progress";

export function generateStaticParams() {
  return curriculum.flatMap((module) => module.lessons.map((item) => ({
    moduleId: module.id,
    topicId: item.id,
  })));
}

export default async function LessonPage({ params }: { params: Promise<{ moduleId: string; topicId: string }> }) {
  const { moduleId, topicId } = await params;
  const module = getModule(moduleId);
  const lesson = getLesson(moduleId, topicId);
  if (!module || !lesson) notFound();
  const index = module.lessons.findIndex((item) => item.id === topicId);
  const previous = module.lessons[index - 1];
  const next = module.lessons[index + 1];

  return (
    <main className="lessonShell">
      <header className="lessonNav">
        <Link className="brand" href="/">▥ DataSciencePath</Link>
        <Link className="backLink" href="/#roadmap">← All learning modules</Link>
      </header>
      <div className="lessonLayout">
        <aside className="lessonSidebar">
          <p className="eyebrow">{module.stage}</p>
          <h2>{module.title}</h2>
          <p className="muted">{module.lessons.length} practical lessons</p>
          <nav aria-label="Lessons in this module" className="lessonTopicList">
            {module.lessons.map((item, i) => (
              <Link key={item.id} aria-current={item.id === topicId ? "page" : undefined}
                className={`lessonTopic ${item.id === topicId ? "active" : ""}`}
                href={`/learn/${module.id}/${item.id}`}>
                <span className="topicNumber">{String(i + 1).padStart(2, "0")}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <article className="lessonArticle">
          <div className="lessonBreadcrumb"><Link href="/">Home</Link><span>/</span><span>{module.title}</span><span>/</span></div>
          <p className="eyebrow">LESSON {String(index + 1).padStart(2, "0")} · {module.level.toUpperCase()}</p>
          <h1>{lesson.title}</h1>
          <p className="lessonLead">{lesson.theory}</p>
          <section className="lessonContentBlock"><h2>Why does this matter?</h2><p>{lesson.why}</p></section>
          <section className="lessonContentBlock"><h2>When should you use it?</h2><p>{lesson.when}</p></section>
          <section className="realWorldCard"><span className="sectionKicker">REAL-WORLD EXAMPLE</span><p>{lesson.realWorld}</p></section>
          <section className="lessonContentBlock"><h2>Try the code</h2><p>Run this example in Python or adapt it to your own dataset. Read the comments and compare the output.</p>
            <pre className="codePanel"><code>{lesson.code}</code></pre>
            <h3>Expected output / result</h3><pre className="outputPanel"><code>{lesson.output}</code></pre>
          </section>
          <section className="exerciseCard"><span className="sectionKicker">YOUR TURN</span><h2>Practice exercise</h2><p>{lesson.exercise}</p></section>
          <LessonProgress moduleId={module.id} lessonId={lesson.id} />
          <div className="lessonPagination">
            {previous ? <Link href={`/learn/${module.id}/${previous.id}`} className="paginationLink"><small>PREVIOUS LESSON</small><strong>← {previous.title}</strong></Link> : <span />}
            {next ? <Link href={`/learn/${module.id}/${next.id}`} className="paginationLink next"><small>NEXT LESSON</small><strong>{next.title} →</strong></Link> : <Link href="/#projects" className="paginationLink next"><small>MODULE COMPLETE?</small><strong>Explore projects →</strong></Link>}
          </div>
        </article>
      </div>
    </main>
  );
}
