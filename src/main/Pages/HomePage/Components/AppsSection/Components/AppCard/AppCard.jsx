import "./AppCard.css"

import { Link } from "react-router-dom"
import { useState } from "react";

export default function AppCard({ data  }) {

    if (!sessionStorage.getItem(`splashMode${data.index}`)) {
        sessionStorage.setItem(`splashMode${data.index}`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`splashMode${data.index}`));

    function handleAppClick() {
        if (mode === "light") {
            sessionStorage.setItem(`splashMode${data.index}`,'dark')
            setMode(sessionStorage.getItem(`splashMode${data.index}`))
        } else {
            sessionStorage.setItem(`splashMode${data.index}`,'light')
            setMode(sessionStorage.getItem(`splashMode${data.index}`))
        }
    }
    
    function handleLinkClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    return (
        <div className="AppCard">
            <div className="img">
                <img src={process.env.PUBLIC_URL+data.hookScreen+mode+'.png'} 
                    alt=""
                    onClick={handleAppClick}/>
            </div>
            <div className="app-info">
                <img src={process.env.PUBLIC_URL+data.logo} alt="" className="logo-img"/>
                <h2>{data.name}</h2>
            </div>
            <h3>{data.brief}</h3>
            <Link to={`/${data.name}`} onClick={handleLinkClick} className="link">
                <div className="details-btn"><h2>More Details</h2></div>
            </Link>
        </div>
    )
}