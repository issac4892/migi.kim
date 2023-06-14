import {useNavigate} from "react-router-dom";
import careers from './data/careers'
import CareerCard from "./components/CareerCard";
import React from "react";
import Helmet from "react-helmet";

export default function Career() {
    const route = useNavigate()
    return (
        <>
            <Helmet>
                <title>💻Career | Mingeon Kim</title>
            </Helmet>
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> <span className="tossface">💻</span>Career</h1>
            <div className="pagedata">
                {careers.map((career, index) => (
                    <CareerCard key={index} corp={career.corp} date={career.date} description={career.description}/>
                ))}
            </div>
        </div>
            </>
    )
}
