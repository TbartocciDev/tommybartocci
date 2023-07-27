import "./ResumeSection.css"

import ExperienceSection from "./ExperienceSection/ExperienceSection"
import PDFLink from "./PDFLink/PDFLink"

export default function ResumeSection({ data }) {
    return (
        <main className="ResumeSection" id="main-section">
            <div className="section-content">
                <h1>Resume</h1>
                <h2>Recent and Relevent</h2>
                <PDFLink />
                <ExperienceSection data={data.work}/>
                <ExperienceSection data={data.education}/>
            </div>
        </main>
    )
}