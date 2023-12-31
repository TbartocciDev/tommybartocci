import "./ContactPage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function ContactPage() {

    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Contact Me'
    }, []);
    
    return (
        <main className="ContactPage" id="main-page">
            <div className="content" id="page-content">
                <h1>Coming soon...</h1>
            </div>
        </main>
    )
}