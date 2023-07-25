import "./IntroSection.css"

export default function IntroSection({ data }) {

    function handlePictureClicked(evt) {
        const img = document.querySelector('.face-photo')
        img.setAttribute('id', 'funny-photo')
        setTimeout(revertToNormal, 1700)
    }

    function revertToNormal() {
        const img = document.querySelector('.face-photo')
        img.setAttribute('id', 'normal-photo')
    }

    return (
        <main className="IntroSection" id="main-section">
            <div className="section-content">
                <h1>{data.header}</h1>
                <div className="summary">
                    <div className="img-content">
                        <div className="img-div">
                            <img src="" alt="" id="normal-photo" className="face-photo" onClick={handlePictureClicked}/>
                            <h3>Interact with me!</h3>
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>{data.summary}</h2>
                        <h2>{data.background}</h2>
                        <h2>{data.finalWords}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}