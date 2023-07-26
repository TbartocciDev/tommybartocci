import "./Instruction.css"

import { useEffect, useState } from 'react';

export default function Instruction({ data, index }) {

    
    if (!sessionStorage.getItem(`instruction${index}`)) {
        sessionStorage.setItem(`instruction${index}`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`instruction${index}`));

    function handleAppClick() {
        console.log(`mode: ${mode}`)
        if (mode === "light") {
            sessionStorage.setItem(`instruction${index}`,'dark')
            setMode(sessionStorage.getItem(`instruction${index}`))
        } else {
            sessionStorage.setItem(`instruction${index}`,'light')
            setMode(sessionStorage.getItem(`instruction${index}`))
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