import "./AppCard.css"

import { Link } from "react-router-dom"

export default function AppCard({ data }) {

    function handleLinkClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    return (
        <div className="AppCard">
            <div className="img">
                <img src={process.env.PUBLIC_URL+data.hookScreen+'dark.png'} alt="" />
            </div>
            <div className="app-info">
                <img src={process.env.PUBLIC_URL+data.logo} alt="" className="logo-img"/>
                <h2>{data.name}</h2>
            </div>
            <h3>{data.brief}</h3>
            <Link to={`/${data.name}`} onClick={handleLinkClick} className="link">
                <div className="details-btn"><h2>More Details</h2></div>
            </Link>
        </div>
    )
}