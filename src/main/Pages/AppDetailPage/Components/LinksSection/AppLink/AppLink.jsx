import "./AppLink.css"

import { Link } from "react-router-dom"

export default function AppLink({ data }) {
    if (data.title === "App Store") {
        return (
            <Link to={data.url}>
                <div className="AppLink">
                    <img src={process.env.PUBLIC_URL+"/logos/download-app-store.png"} alt="" id="app-store"/>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to={data.url}>
                <div className="AppLink">
                    <h2>{data.title}</h2>
                    <img src="https://icongr.am/material/github.svg?size=128&color=ffffff" alt="" id="logo"/>
                </div>
            </Link>
        )
    }
}