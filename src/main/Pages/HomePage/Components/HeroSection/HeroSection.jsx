import "./HeroSection.css"

import StatusBar from "./StatusBar/StatusBar"

export default function HeroSection({ data }) {
    return (
        <main className="HeroSection" id="main-section">
            <div className="section-content">
                <h2>{data.header}</h2>
                <h1>{data.subheader}</h1>
                <h2>{data.summary}</h2>
                <StatusBar data={data.status}/>
            </div>
        </main>
    )
}