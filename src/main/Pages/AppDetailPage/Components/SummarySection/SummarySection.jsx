import "./SummarySection.css"

import Techs from "./Techs/Techs"

export default function SummarySection({ data }) {
    return (
        <main className="SummarySection" id="main-section">
            <div className="section-content">
                <div className="app-info">
                    <h1>Introducing {data.name}</h1>
                    <h2>Role: {data.role}</h2>
                    <h3>{data.summary}</h3>
                    <Techs data={data.technologies}/>
                </div>
                <div className="img">
                    <img src={process.env.PUBLIC_URL+data.homeScreen+'dark.png'} alt="" />
                </div>
            </div>
        </main>
    )
}