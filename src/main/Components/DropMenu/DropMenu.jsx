import "./DropMenu.css"

import { Link } from "react-router-dom"

export default function DropMenu({ data }) {

    function handleLinkClick() {
        const dropMenu = document.querySelector('.menu-content')
        const dropShadow = document.querySelector('.menu-shadow')
        dropMenu.setAttribute('id','hiddenDrop')
        dropShadow.setAttribute('id','hiddenShadow')
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }


    return (
        <main className="DropMenu">
            <div className="menu-content">
                <div className="links-container"
                style={{gridTemplateRows:`repeat(${data.length},10vh)`}}>
                    {data.map((link, key) => (
                        <div className="page-link" key={key}>
                            <Link to={link.url} onClick={handleLinkClick}>
                                <h2>{link.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="menu-shadow" onClick={handleLinkClick}></div>
        </main>
    )
}