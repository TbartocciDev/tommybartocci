import "./InterestsSection.css"

import SubjectView from "./SubjectView/SubjectView"

export default function InterestsSection({ data, subject, setSubject }) {
    return (
        <main className="InterestsSection" id="main-section">
            <div className="section-content">
                <h1>{data.title}</h1>
                <SubjectView data={data} setSubject={setSubject} subject={subject}/>
            </div>
        </main>
    )
}