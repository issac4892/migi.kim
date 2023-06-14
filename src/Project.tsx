import {useNavigate} from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import React from "react";
import Helmet from "react-helmet";

export default function Project() {
    const route = useNavigate()
    return (
        <>
            <Helmet>
                <title>🛠Projects | Mingeon Kim</title>
            </Helmet>
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> <span className="tossface">🛠</span>️Projects</h1>
            <div className="pagedata grid-project">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} date={project.date}
                                 status={project.status} link={project.link}/>
                ))}
            </div>
        </div>
            </>
    )
}
