import "./HomePage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import HeroSection from "./Components/HeroSection/HeroSection";
import AppsSection from "./Components/AppsSection/AppsSection";
import ResumeSection from "./Components/ResumeSection/ResumeSection";

export default function HomePage({ data, setPage }) {
    
    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Welcome to my Portfolio'
    }, []);

    setPage('home')

    return (
        <main className="HomePage" id="main-page">
            <div className="content" id="page-content">
                <HeroSection data={data.heroSection}/>
                <AppsSection data={data.appsSection}/>
                <ResumeSection data={data.resumeSection}/>
            </div>
        </main>
    )
}