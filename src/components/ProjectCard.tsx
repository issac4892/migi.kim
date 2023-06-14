import {ProjectStatus} from "../enum/ProjectEnum";
import '../style/projectcard.css'
import {Project} from "../data/projects";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function ProjectCard(props: Project) {
    const [color, setColor] = useState('gray')
    useEffect(() => {
        if(ProjectStatus.IN_PROGRESS === props.status) setColor('blue')
        if(ProjectStatus.DONE === props.status) setColor('green')
        if(ProjectStatus.TODO === props.status) setColor('gray')
    }, [props.status])
    return (
        <div className="project-card">
            <h2 className={props.link ? 'nomargin' : 'nomargin'}>
                {props.link ? <Link className="project-card-link" to={props.link}>{props.title}</Link> : props.title}
            </h2>
            <span>{props.description}</span><br/>
            <span>{props.date}</span>
            <div className={`project-card-status ${color}`}>{props.status}</div>
        </div>
    )
}
