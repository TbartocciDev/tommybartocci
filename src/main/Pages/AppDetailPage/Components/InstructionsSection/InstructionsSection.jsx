import "./InstructionsSection.css"

import Instruction from "./Instruction/Instruction"

export default function InstructionsSection({ data }) {
    return (
        <main className="InstructionsSection" id="main-section">
            <div className="section-content">
                <h1>Features</h1>
                <div className="instructions-container">
                    {data.instructions.map((instr, index) => (
                        <Instruction data={instr} key={index} index={index} name={data.name}/>
                    ))}
                </div>
            </div>
        </main>
    )
}