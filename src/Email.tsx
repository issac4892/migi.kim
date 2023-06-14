import {Link, useNavigate} from "react-router-dom";

export default function Email() {
    const route = useNavigate()
    return (
        <div className="page font-suit">
            <h1 className="suite"><span className="back" onClick={() => route('/')}>←</span> Email</h1>
            <div className="pagedata email-div">
                Work | <Link className="emaillink" to="mailto:mingeon.kim@algorix.io">mingeon.kim@algorix.io</Link><br/>
                Personal | <Link className="emaillink" to="mailto:issac4892@gmail.com">issac4892@gmail.com</Link><br/>
                Personal | <Link className="emaillink" to="mailto:me@migi.kim">me@migi.kim</Link>
            </div>
        </div>
    )
}
