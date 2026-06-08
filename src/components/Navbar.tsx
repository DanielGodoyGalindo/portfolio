import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                borderBottom: "1px solid #ddd",
            }}
        >
            <Link to="/">Inicio</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/about">Sobre mí</Link>
        </nav>
    );
}
