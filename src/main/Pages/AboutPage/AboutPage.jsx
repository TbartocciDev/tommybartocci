import "./AboutPage.css"

import { Link } from "react-router-dom"

export default function AboutPage() {
    const docTitle = document.querySelector('.website-title')
    docTitle.innerHTML = 'Tommy Bartocci: Learn About'
    return (
        <main className="AboutPage">
            <div className="content" id="page-content">
                <h1>About Page</h1>
            </div>
        </main>
    )
}