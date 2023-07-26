import "./InstructionsSection.css"

import Instruction from "./Instruction/Instruction"

export default function InstructionsSection({ data }) {
    return (
        <main className="InstructionsSection" id="main-section">
            <div className="section-content">
                <h1>How It Works</h1>
                <div className="instructions-container">
                    {data.instructions.map((instr) => (
                        <Instruction data={instr}/>
                    ))}
                </div>
            </div>
        </main>
    )
}