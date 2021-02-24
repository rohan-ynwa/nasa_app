import React, { useState } from 'react';
import orbit from "./animation.png"

function NavBar() {
    const [expand, setExpand] = useState(false);
    const [first, setFirst] = useState(true);

    const animate = () => {
        setFirst(false);
        if (!expand === true) {
            setExpand(true);
            setTimeout(() => {
                setExpand(false)
            }, 3000);
        }
    }

    return (
        <div className = "navbar">
            <div className = "navbar-wrapper-content">
                <div className = "navbar-text" onMouseOver = {animate}>
                    <span className = "nasa">NASA</span> 
                    <span className = "apod"> | <b>APOD</b></span>
                </div>
                <img src = {orbit} alt="orbit logo" className = {expand ? "orbit rotate" : first ? "orbit rotate" : "orbit"}></img>
            </div>
        </div>
    )
}

export default NavBar;