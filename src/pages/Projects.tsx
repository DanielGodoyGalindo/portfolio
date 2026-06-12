import projects from "../projects-data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}