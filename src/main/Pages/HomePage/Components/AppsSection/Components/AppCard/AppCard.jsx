import "./AppCard.css"

import { Link } from "react-router-dom"
import { useState } from "react";

export default function AppCard({ data  }) {

    if (!sessionStorage.getItem(`splashMode`)) {
        sessionStorage.setItem(`splashMode`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`splashMode`));

    function handleAppClick() {
        if (mode === "light") {
            sessionStorage.setItem(`splashMode`,'dark')
            setMode(sessionStorage.getItem(`splashMode`))
        } else {
            sessionStorage.setItem(`splashMode`,'light')
            setMode(sessionStorage.getItem(`splashMode`))
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