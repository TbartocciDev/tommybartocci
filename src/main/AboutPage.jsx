import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <main className="AboutPage"
            style={{
                height:"100vh",
                width:"100vw",
                backgroundColor:'blue'}}>
            <h1>About Page</h1>
            <Link to="/">
                <h2>Home Page</h2>
            </Link>
        </main>
    )
}