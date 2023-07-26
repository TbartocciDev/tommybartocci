import "./LinksSection.css"

import AppLink from "./AppLink/AppLink"

export default function LinksSection({ data }) {
    return (
        <main className="LinksSection" id="main-section">
            <div className="section-content">
                {data.map((link) => (
                    <AppLink data={link}/>
                ))}
            </div>
        </main>
    )
}