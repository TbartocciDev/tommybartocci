import "./AppDetailPage.css"

import { useParams } from "react-router"

import SummarySection from "./Components/SummarySection/SummarySection"
import InstructionsSection from "./Components/InstructionsSection/InstructionsSection"
import LinksSection from "./Components/LinksSection/LinksSection"

export default function AppDetailPage({ data }) {

    const { appName } = useParams()
    const app = data.find((pro) => pro.name === appName)

    return (
        <main className="AppDetailPage" id="main-page">
            <div className="content" id="page-content">
                <SummarySection data={app}/>
                <InstructionsSection data={app} />
                <LinksSection data={app.links}/>
            </div>
        </main>
    )
}