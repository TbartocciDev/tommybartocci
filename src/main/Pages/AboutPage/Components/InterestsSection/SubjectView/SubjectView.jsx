import "./SubjectView.css"

import InterestView from "./InterestView/InterestView"

export default function SubjectView({ data, subject, setSubject }) {

    var subjectBtns = document.querySelectorAll('.subject-btn')

    function updateBtns() {
        subjectBtns = document.querySelectorAll('.subject-btn')
        subjectBtns.forEach((btn) => {
            btn.removeAttribute('id')
            if (btn.children[0].innerHTML.toLowerCase() === subject) {
                btn.setAttribute('id', 'selected-subject')
            }
        })
    }
    updateBtns()

    function subjectBtnClicked(evt) {
        const targetChild = evt.target.children[0].innerHTML.toLowerCase()
        sessionStorage.setItem('interest',targetChild)
        setSubject(targetChild)
        updateBtns()
    }

    return (
        <div className="SubjectView">
            <div className="btns-container">
                {data.subjects.map((s,key) => (
                    <div className="subject-btn" key={key} onClick={subjectBtnClicked}>
                        <h2>{s}</h2>
                    </div>
                ))}
            </div>
            <div className="img-div">
                <img src={process.env.PUBLIC_URL+`/interests/${subject}.png`} alt="" />
            </div>
            <InterestView data={data.all} subject={subject}/>
        </div>
    )
}