import "./NavBar.css"

import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function NavBar({ data, page }) {

    function updateLinks() {
        const links = document.querySelectorAll('.page-link')
        links.forEach((l) => {
            l.removeAttribute('id')
            if (l.children[0].innerHTML.toLowerCase() === page) {
                l.setAttribute('id', 'selected-link')
            }
        })
    }

    updateLinks()

    function handleLinkClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    function handleHamburgerClick() {
        const dropMenu = document.querySelector('.menu-content')
        const dropShadow = document.querySelector('.menu-shadow')
        const showingState = dropMenu.getAttribute('id')

        if (showingState === 'visibleDrop') {
            dropMenu.setAttribute('id','hiddenDrop')
            dropShadow.setAttribute('id','hiddenShadow')
        } else {
            dropMenu.setAttribute('id','visibleDrop')
            dropShadow.setAttribute('id','visibleShadow')
        }
        updateLinks()
    }

    return (
        <main className="NavBar">
            <div className="content">
                    <div className="page-links"
                    style={{gridTemplateColumns:`repeat(${data.pageLinks.length}, 150px)`}}>
                        {data.pageLinks.map((link, key) => (
                            <Link to={link.url} key={key} className="page-link" onClick={handleLinkClick}>
                                <h2>{link.title}</h2>
                            </Link>
                        ))}
                    </div>
                    <div className="hamburger-menu">
                        <img 
                        src="https://icongr.am/clarity/menu.svg?size=128&color=ffffff" 
                        alt="" 
                        className="hamburger-img"
                        onClick={handleHamburgerClick}/>
                    </div>
            </div>
        </main>
    )
}