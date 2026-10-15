import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projects" };

const card: React.CSSProperties = {
  display: "block",
  padding: "1.25rem",
  border: "1px solid rgba(128,128,128,0.35)",
  borderRadius: 12,
  textDecoration: "none",
  color: "inherit",
};

export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ marginBottom: 4 }}>Projects</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Build portfolio projects step by step, with milestones and downloadable datasets.
      </p>

      <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} style={card}>
            <h2 style={{ margin: "0 0 .25rem" }}>{project.title}</h2>
            <p style={{ margin: "0 0 .75rem" }}>{project.summary}</p>
            <p style={{ margin: 0, fontSize: 14, opacity: 0.8 }}>
              {project.level} · about {project.estimatedHours} hours · {project.milestones.length} milestones ·{" "}
              {project.datasets.length} dataset{project.datasets.length === 1 ? "" : "s"}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
