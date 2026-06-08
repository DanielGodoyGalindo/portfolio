import type { Project } from "../types/Project";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                width: "280px",
            }}
        >
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div style={{ marginTop: "1rem" }}>
                {project.demo && (
                    <a href={project.demo} target="_blank">
                        🔗 Demo
                    </a>
                )}
                <br />
                <a href={project.github} target="_blank">
                    📦 Código
                </a>
            </div>
        </div>
    );
}
