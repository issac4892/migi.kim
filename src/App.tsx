import React from 'react'
import './style/app.css'
import EmailIcon from "./icons/email";
import GithubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import DiscordIcon from "./icons/discord";
import {Link, useNavigate} from "react-router-dom";
import {Tooltip} from 'react-tooltip'
import Helmet from "react-helmet";

function App() {
    const route = useNavigate()
    return (
        <>
            <Helmet>
                <title>Mingeon Kim</title>
            </Helmet>
            <div className="page main">
                <Tooltip id="discord"/>
                <img src="pfp.png" className="profile-pic" alt="Profile Picture"/><br/>
                <span className="font-suit font-big">Mingeon Kim</span><br/>
                <span>Fullstack Developer</span>
                <div className="flex-icon">
                    <div onClick={() => route('/email')}>
                        <EmailIcon/>
                    </div>
                    <div onClick={() => window.location.href = 'https://github.com/issac4892'}>
                        <GithubIcon/>
                    </div>
                    <div onClick={() => window.location.href = 'https://www.linkedin.com/in/mingeonkim'}>
                        <LinkedInIcon/>
                    </div>
                    <div data-tooltip-id="discord" data-tooltip-content="migi" data-tooltip-place="bottom">
                        <DiscordIcon/>
                    </div>
                </div>
                <div className="flex-icon" style={{width: '200px'}}>
                    <Link to="/career" className="link"><span className="tossface">💻</span> Career</Link>
                    <Link to="/projects" className="link"><span className="tossface">🛠</span>️ Projects</Link>
                    <Link to="/education" className="link"><span className="tossface">🏫</span> Education</Link>
                </div>
                <span className="font-suit font-small">Mingeon Kim @ 2023</span>
            </div>
        </>
    )
}

export default App
