import "./ContactPage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function ContactPage() {

    useEffect(() => {
        const docTitle = document.querySelector('#website-title')
        docTitle.innerHTML = 'Tommy Bartocci: Contact Me'
    }, []);
    
    return (
        <main className="ContactPage">
            <div className="content" id="page-content">
                <h1>Contact Page</h1>
            </div>
        </main>
    )
}