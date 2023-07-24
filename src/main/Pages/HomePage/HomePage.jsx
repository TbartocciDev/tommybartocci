import "./HomePage.css"
import { Link } from "react-router-dom"

export default function HomePage() {
    const docTitle = document.querySelector('.website-title')
    docTitle.innerHTML = 'Tommy Bartocci: Welcome to my Portfolio'
    return (
        <main className="HomePage">
            <div className="content" id="page-content">
                <h1>Home Page</h1>
            </div>
        </main>
    )
}