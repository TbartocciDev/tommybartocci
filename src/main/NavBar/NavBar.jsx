import "./NavBar.css"

import { Link } from "react-router-dom"

export default function NavBar({ data }) {
    return (
        <main className="NavBar">
            <div className="content">
                {data.pageLinks.map((link) => (
                    <Link to={link.url}>
                        <h2>{link.title}</h2>
                    </Link>
                ))}
            </div>
        </main>
    )
}