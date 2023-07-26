import "./AppsSection.css"

import AppCard from "./Components/AppCard/AppCard"

export default function AppsSection({ data }) {
    return (
        <main className="AppsSection" id="main-section">
            <div className="section-content">
                <h1>{data.header}</h1>
                <h2>{data.subheader}</h2>
                <div className="apps-container">
                    {data.applications.map((app, key) => (
                        <AppCard data={app} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}