import "./AppDetailPage.css"

import { useParams } from "react-router"

export default function AppDetailPage({ data }) {

    const { appName } = useParams()
    const app = data.find((pro) => pro.name === appName)

    return (
        <main className="AppDetailPage" id="main-page">
            <div className="content" id="page-content">
                <h1>{app.name}</h1>
            </div>
        </main>
    )
}