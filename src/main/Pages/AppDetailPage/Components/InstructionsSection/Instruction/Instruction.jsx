import "./Instruction.css"

import { useEffect, useState } from 'react';

export default function Instruction({ data, index, appIndex }) {

    
    if (!sessionStorage.getItem(`instruction${appIndex}${index}`)) {
        sessionStorage.setItem(`instruction${appIndex}${index}`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`instruction${appIndex}${index}`));

    function handleAppClick() {
        console.log(`mode: ${mode}`)
        if (mode === "light") {
            sessionStorage.setItem(`instruction${appIndex}${index}`,'dark')
            setMode(sessionStorage.getItem(`instruction${appIndex}${index}`))
        } else {
            sessionStorage.setItem(`instruction${appIndex}${index}`,'light')
            setMode(sessionStorage.getItem(`instruction${appIndex}${index}`))
        }
    }

    return (
        <div className="Instruction">
            <div className="img">
                <img src={process.env.PUBLIC_URL+data.img+mode+'.png'} 
                    alt="" 
                    onClick={handleAppClick}/>
            </div>
            <div className="instuction-info">
                <h2>{data.title}</h2>
                <h3>{data.summary}</h3>
            </div>
        </div>
    )
}