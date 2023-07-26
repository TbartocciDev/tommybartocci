import "./Instruction.css"

export default function Instruction({ data }) {
    return (
        <div className="Instruction">
            <div className="img">
                <img src={process.env.PUBLIC_URL+data.img+'dark.png'} alt="" />
            </div>
            <div className="instuction-info">
                <h2>{data.title}</h2>
                <h3>{data.summary}</h3>
            </div>
        </div>
    )
}