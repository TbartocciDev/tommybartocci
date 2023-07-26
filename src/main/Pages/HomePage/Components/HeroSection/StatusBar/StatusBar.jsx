import "./StatusBar.css"

import { Link } from "react-router-dom"

export default function StatusBar({ data }) {
    console.log(data.status)
    return (
        <Link to="/contact">
            <div className="StatusBar" id="open">
                <div className="circle"></div>
                <h3>{data.info}</h3>
            </div>
        </Link>
    )
}