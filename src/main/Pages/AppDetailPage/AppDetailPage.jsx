import "./AppDetailPage.css"

import { useParams } from "react-router"

import SummarySection from "./Components/SummarySection/SummarySection"

export default function AppDetailPage({ data }) {

    const { appName } = useParams()
    const app = data.find((pro) => pro.name === appName)

    return (
        <main className="AppDetailPage" id="main-page">
            <div className="content" id="page-content">
                <SummarySection data={app}/>
            </div>
        </main>
    )
}