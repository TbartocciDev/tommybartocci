import "./Techs.css"

export default function Techs({ data }) {
    return (
        <div className="Techs">
            <h2>Technologies:</h2>
            <ul>
                {data.map((tech, key) => (
                    <li key={key}><h3>{tech}</h3></li>
                ))}
            </ul>
        </div>
    )
}