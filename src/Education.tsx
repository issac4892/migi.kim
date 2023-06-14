import {useNavigate} from "react-router-dom";
import educations from "./data/educations";
import EducationCard from "./components/EducationCard";
import React from "react";
import Helmet from 'react-helmet';

export default function Education() {
    const route = useNavigate()
    return (
        <>
            <Helmet>
                <title>🏫Education | Mingeon Kim</title>
            </Helmet>
            <div className="page font-suit">
                <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> <span
                    className="tossface">🏫</span>Education</h1>
                <div className="pagedata">
                    {educations.map((education, index) => (
                        <EducationCard key={index} place={education.place} description={education.description}
                                       date={education.date}/>
                    ))}
                </div>
            </div>
        </>
    )
}
