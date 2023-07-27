import "./Instruction.css"

import { useEffect, useState } from 'react';

export default function Instruction({ data, index, name }) {

    
    if (!sessionStorage.getItem(`instruction${name}${index}`)) {
        sessionStorage.setItem(`instruction${name}${index}`,'light')
    }
    
    const [mode, setMode] = useState(sessionStorage.getItem(`instruction${name}${index}`));

    function handleAppClick() {
        console.log(`mode: ${mode}`)
        if (mode === "light") {
            sessionStorage.setItem(`instruction${name}${index}`,'dark')
            setMode(sessionStorage.getItem(`instruction${name}${index}`))
        } else {
            sessionStorage.setItem(`instruction${name}${index}`,'light')
            setMode(sessionStorage.getItem(`instruction${name}${index}`))
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