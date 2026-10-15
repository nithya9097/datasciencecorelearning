import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

type PageProps = { params: Promise<{ projectId: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { projectId } = await params;
  return { title: getProject(projectId)?.title ?? "Project" };
}

const box: React.CSSProperties = {
  border: "1px solid rgba(128,128,128,0.35)",
  borderRadius: 12,
  padding: "1.25rem",
};

const button: React.CSSProperties = {
  display: "inline-block",
  padding: "0.55rem 1rem",
  borderRadius: 8,
  border: "1px solid currentColor",
  textDecoration: "none",
  fontWeight: 600,
  color: "inherit",
};

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) notFound();

  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1rem" }}>
      <p style={{ margin: 0 }}>
        <Link href="/projects">Back to projects</Link>
      </p>

      <h1 style={{ marginBottom: 4 }}>{project.title}</h1>
      <p style={{ marginTop: 0 }}>{project.summary}</p>
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        {project.level} · about {project.estimatedHours} hours · {project.skills.join(", ")}
      </p>

      {/* Goal */}
      <section style={{ ...box, marginTop: "1.5rem" }}>
        <h2 style={{ marginTop: 0 }}>The goal</h2>
        <p>
          <strong>Business question:</strong> {project.businessQuestion}
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Success metric:</strong> {project.successMetric}
        </p>
      </section>

      {/* Datasets */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Datasets</h2>
        {project.datasets.map((dataset) => (
          <div key={dataset.id} style={box}>
            <h3 style={{ marginTop: 0 }}>{dataset.name}</h3>
            <p>{dataset.description}</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>
              {dataset.rows.toLocaleString("en-IN")} rows · {dataset.columns.length} columns · CSV
            </p>
            <a href={dataset.file} download={dataset.fileName} style={button}>
              Download {dataset.fileName}
            </a>

            <details style={{ marginTop: "1rem" }}>
              <summary style={{ cursor: "pointer" }}>Column guide</summary>
              <div style={{ overflowX: "auto", marginTop: ".75rem" }}>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
                  <thead>
                    <tr>
                      {["Column", "Type", "Meaning"].map((h) => (
                        <th key={h} style={{ textAlign: "left", padding: "6px 8px", borderBottom: "1px solid rgba(128,128,128,0.5)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataset.columns.map((column) => (
                      <tr key={column.name}>
                        <td style={{ padding: "6px 8px", fontFamily: "monospace" }}>{column.name}</td>
                        <td style={{ padding: "6px 8px" }}>{column.type}</td>
                        <td style={{ padding: "6px 8px" }}>{column.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        ))}
      </section>

      {/* Milestones */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Milestones</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
          {project.milestones.map((milestone, index) => (
            <li key={milestone.id} style={box}>
              <h3 style={{ marginTop: 0 }}>
                {index + 1}. {milestone.title}
              </h3>
              <p>{milestone.goal}</p>

              <p style={{ marginBottom: 4 }}>
                <strong>What to do</strong>
              </p>
              <ul style={{ marginTop: 0 }}>
                {milestone.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>

              <p>
                <strong>You will have:</strong> {milestone.deliverable}
              </p>

              <p style={{ marginBottom: 4 }}>
                <strong>Review these lessons</strong>
              </p>
              <ul style={{ marginTop: 0, marginBottom: 0 }}>
                {milestone.lessons.map((lesson) => (
                  <li key={lesson.topicId}>
                    <Link href={`/learn/${lesson.moduleId}/${lesson.topicId}`}>{lesson.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
