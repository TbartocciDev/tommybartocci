import "./HomePage.css"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <main className="HomePage">
            <div className="content" id="page-content">
                <h1>Home Page</h1>
                <Link to="/about">
                    <h2>About Page</h2>
                </Link>
            </div>
        </main>
    )
}