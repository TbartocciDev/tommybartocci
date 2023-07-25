import "./AboutPage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import IntroSection from "./Components/IntroSection/IntroSection";

export default function AboutPage({ data }) {

    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Learn About'
    }, []);
    
    return (
        <main className="AboutPage" id="main-page">
            <div className="content" id="page-content">
                <IntroSection data={data.introSection}/>
            </div>
        </main>
    )
}