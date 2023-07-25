import "./InterestView.css"

export default function InterestView({ data, subject }) {
    var listItems = []
    
    function populateList() {
        listItems = []
        data.forEach((item) => {
            if (item.category === subject) {
                listItems.push(item)
            }
        })
    }
    populateList()
    
    return (
        <ul className="InterestView">
            {listItems.map((item, key) => (
                <h3 key={key}><span>{item.title}:</span> {item.summary}</h3>
            ))}
        </ul>
    )
}