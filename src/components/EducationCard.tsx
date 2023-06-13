import {Education} from "../data/educations";

export default function EducationCard(props: Education) {
    return (
        <div>
            <h2 className="suite">{props.place}</h2>
            <span>{props.description} | {props.date}</span>
        </div>
    )
}
