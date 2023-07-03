import {Link, useNavigate} from "react-router-dom";
import Helmet from "react-helmet";

export default function Email() {
    const route = useNavigate()
    return (
        <>
            <Helmet>
                <title>✉️Email | Mingeon Kim</title>
            </Helmet>
        <div className="page font-suit">
            <h1 className="suite">
                <span className="back" onClick={() => route('/')}>← </span>
                <span className="tossface">✉️</span>Email</h1>
            <div className="pagedata email-div">
                <span className="tossface">🏢️</span>Work | <Link className="emaillink" to="mailto:mingeon.kim@algorix.io">mingeon.kim@algorix.io</Link><br/>
                <span className="tossface">👤</span>Personal | <Link className="emaillink" to="mailto:issac4892@gmail.com">issac4892@gmail.com</Link><br/>
                <span className="tossface">👤</span>Personal | <Link className="emaillink" to="mailto:me@migi.kim">me@migi.kim</Link>
            </div>
        </div>
            </>
    )
}
