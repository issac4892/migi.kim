import {useNavigate} from "react-router-dom";
import careers from './data/careers'
import CareerCard from "./components/CareerCard";

export default function Career() {
    const route = useNavigate()
    return (
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> Career</h1>
            <div className="pagedata">
                {careers.map((career, index) => (
                    <CareerCard key={index} corp={career.corp} date={career.date} description={career.description}/>
                ))}
            </div>
        </div>
    )
}
