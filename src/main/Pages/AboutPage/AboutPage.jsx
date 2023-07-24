import "./AboutPage.css"

import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <main className="AboutPage">
            <div className="content" id="page-content">
                <h1>About Page</h1>
                <Link to="/">
                    <h2>Home Page</h2>
                </Link>
            </div>
        </main>
    )
}