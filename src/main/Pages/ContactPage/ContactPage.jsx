import "./ContactPage.css"

export default function ContactPage() {
    const docTitle = document.querySelector('.website-title')
    docTitle.innerHTML = 'Tommy Bartocci: Contact Me'
    return (
        <main className="ContactPage">
            <div className="content" id="page-content">
                <h1>Contact Page</h1>
            </div>
        </main>
    )
}