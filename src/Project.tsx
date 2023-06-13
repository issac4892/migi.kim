import {useNavigate} from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";

export default function Project() {
    const route = useNavigate()
    return (
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> Projects</h1>
            <div className="pagedata flex-project">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} date={project.date}
                                 status={project.status} link={project.link}/>
                ))}
            </div>
        </div>
    )
}
