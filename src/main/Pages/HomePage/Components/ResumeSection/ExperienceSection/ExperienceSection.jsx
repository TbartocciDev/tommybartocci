import "./ExperienceSection.css"

import Experience from "./Experience/Experience"

export default function ExperienceSection({ data }) {
    return (
        <div className="ExperienceSection">
            <h2>{data.header}</h2>
            <div className="experiences-container">
                {data.experiences.map((exp) => (
                    <Experience data={exp} img={data.img}/>
                ))}
            </div>
        </div>
    )
}