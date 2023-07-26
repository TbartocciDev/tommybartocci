import "./ResumeSection.css"

import ExperienceSection from "./ExperienceSection/ExperienceSection"

export default function ResumeSection({ data }) {
    return (
        <main className="ResumeSection" id="main-section">
            <div className="section-content">
                <h1>Resume</h1>
                <ExperienceSection data={data.work}/>
                <ExperienceSection data={data.education}/>
            </div>
        </main>
    )
}