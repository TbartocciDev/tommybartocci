import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <main className="HomePage"
            style={{
                height:"100vh",
                width:"100vw",
                backgroundColor:'green'}}>
            <h1>Home Page</h1>
            <Link to="/about">
                <h2>About Page</h2>
            </Link>
        </main>
    )
}