import "./SummarySection.css"

import { useEffect, useState } from 'react';

import Techs from "./Techs/Techs"

export default function SummarySection({ data }) {

    if (!sessionStorage.getItem(`homeMode${data.name}`)) {
        sessionStorage.setItem(`homeMode${data.name}`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`homeMode${data.name}`));

    function handleAppClick() {
        console.log(`mode: ${mode}`)
        if (mode === "light") {
            sessionStorage.setItem(`homeMode${data.name}`,'dark')
            setMode(sessionStorage.getItem(`homeMode${data.name}`))
        } else {
            sessionStorage.setItem(`homeMode${data.name}`,'light')
            setMode(sessionStorage.getItem(`homeMode${data.name}`))
        }
    }

    return (
        <main className="SummarySection" id="main-section">
            <div className="section-content">
                <div className="app-info">
                    <h1>Introducing {data.name}</h1>
                    <h2>Role: {data.role}</h2>
                    <h3>{data.summary}</h3>
                    <Techs data={data.technologies}/>
                </div>
                <div className="img">
                    <img src={process.env.PUBLIC_URL+data.homeScreen+mode+'.png'} 
                        alt="" onClick={handleAppClick}/>
                </div>
            </div>
        </main>
    )
}