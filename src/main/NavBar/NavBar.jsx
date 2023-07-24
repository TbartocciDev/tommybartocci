import "./NavBar.css"

import { Link } from "react-router-dom"

export default function NavBar({ data }) {
    return (
        <main className="NavBar">
            <div className="content">
                {data.pageLinks.map((link, key) => (
                    <Link to={link.url} key={key}>
                        <h2>{link.title}</h2>
                    </Link>
                ))}
            </div>
        </main>
    )
}