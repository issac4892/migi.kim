import {Career} from "../data/careers";

export default function CareerCard(props: Career) {
    return (
        <div>
            <h2 className="suite">{props.corp}</h2>
            <span>{props.description} | {props.date}</span>
        </div>
    )
}
