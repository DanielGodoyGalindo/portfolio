import type { Project } from "../../types/Project";
import styles from "./ProjectCard.module.css"

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className={styles.links}>
                {project.demo && (<a href={project.demo} target="_blank">🔗 Demo</a>)}
                <br />
                <a href={project.github} target="_blank">📦 Código</a>
            </div>
        </div>
    );
}
