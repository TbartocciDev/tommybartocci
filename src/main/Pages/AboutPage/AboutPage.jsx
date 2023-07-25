import "./AboutPage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import IntroSection from "./Components/IntroSection/IntroSection";
import InterestsSection from "./Components/InterestsSection/InterestsSection";

export default function AboutPage({ data, subject, setSubject, setPage }) {

    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Learn About'
    }, []);
    
    setSubject(sessionStorage.getItem('interest'))
    setPage('about')

    if (!sessionStorage.getItem('interest')) {
        sessionStorage.setItem('interest', 'hobbies')
    }
    

    
    return (
        <main className="AboutPage" id="main-page">
            <div className="content" id="page-content">
                <IntroSection data={data.introSection}/>
                <InterestsSection data={data.interestsSection} subject={subject} setSubject={setSubject}/>
            </div>
        </main>
    )
}