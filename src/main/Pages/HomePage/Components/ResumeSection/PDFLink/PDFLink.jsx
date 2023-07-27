import "./PDFLink.css"

import { Link } from "react-router-dom"

export default function PDFLink() {
    return (
        <Link to={process.env.PUBLIC_URL+"/pdfs/resume.pdf"} target="_blank">
            <div className="PDFLink">
                <h3>Resume PDF</h3>
                <img src="https://icongr.am/material/adobe-acrobat.svg?size=128&color=ffffff" alt="" />
            </div>
        </Link>
    )
}