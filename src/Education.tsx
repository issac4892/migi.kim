import {useNavigate} from "react-router-dom";
import educations from "./data/educations";
import EducationCard from "./components/EducationCard";

export default function Education() {
    const route = useNavigate()
    return (
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> Education</h1>
            <div className="pagedata">
                {educations.map((education, index) => (
                    <EducationCard key={index} place={education.place} description={education.description}
                                   date={education.date}/>
                ))}
            </div>
        </div>
    )
}
