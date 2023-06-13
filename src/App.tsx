import React from 'react'
import './style/app.css'
import EmailIcon from "./icons/email";
import GithubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import DiscordIcon from "./icons/discord";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="page main">
            <img src="pfp.png" className="profile-pic" alt="Profile Picture"/><br/>
            <span className="font-suit font-big">Mingeon Kim</span><br/>
            <span>Fullstack Developer</span>
            <div className="flex-icon">
                <div onClick={() => alert('Personal: issac4892@gmail.com\nPersonal: me@migi.kim\nWork: mingeon.kim@algorix.io')}>
                    <EmailIcon/>
                </div>
                <div onClick={() => window.location.href = 'https://github.com/issac4892'}>
                    <GithubIcon/>
                </div>
                <div onClick={() => window.location.href = 'https://www.linkedin.com/in/mingeonkim'}>
                    <LinkedInIcon/>
                </div>
                <div onClick={() => alert('Contact me via migi in Discord.')}>
                    <DiscordIcon/>
                </div>
            </div>
            <div className="flex-icon" style={{ width: '200px' }}>
                <Link to="/career" className="link">Career</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/education" className="link">Education</Link>
            </div>
            <span className="font-suit font-small">Mingeon Kim @ 2023</span>
        </div>
    )
}

export default App
