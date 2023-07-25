import "./HomePage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function HomePage({ data, setPage }) {
    
    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Welcome to my Portfolio'
    }, []);

    setPage('home')

    return (
        <main className="HomePage" id="main-page">
            <div className="content" id="page-content">
                <h1>Home Page</h1>
            </div>
        </main>
    )
}