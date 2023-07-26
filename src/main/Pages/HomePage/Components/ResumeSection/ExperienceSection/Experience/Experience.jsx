import "./Experience.css"

export default function Experience({ data, img }) {
    return (
        <div className="Experience">
            <div className="job">
                <h3 id="exp-title">{data.title}</h3>
                <h3>{data.date}</h3>
            </div>
            <div className="img-content">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="line"></div>
            </div>
            <div className="details">
                <h3 id="exp-title">{data.company}</h3>
                <h3>{data.description}</h3>
            </div>
        </div>
    )
}