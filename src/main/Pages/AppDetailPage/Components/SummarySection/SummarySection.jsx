import "./SummarySection.css"

import { useEffect, useState } from 'react';

import Techs from "./Techs/Techs"

export default function SummarySection({ data }) {

    if (!sessionStorage.getItem(`homeMode`)) {
        sessionStorage.setItem(`homeMode`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`homeMode`));

    function handleAppClick() {
        console.log(`mode: ${mode}`)
        if (mode === "light") {
            sessionStorage.setItem(`homeMode`,'dark')
            setMode(sessionStorage.getItem(`homeMode`))
        } else {
            sessionStorage.setItem(`homeMode`,'light')
            setMode(sessionStorage.getItem(`homeMode`))
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