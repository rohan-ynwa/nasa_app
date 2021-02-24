import React, { useState } from 'react';
import orbit from "./animation.png"

function NavBar() {
    const [expand, setExpand] = useState(false);

    const animate = () => {
        if(!expand === true) {
            setExpand(true);
            setTimeout(() => {
                setExpand(false)
            }, 3000);
        }
    }

    return (
        <div className = "navbar">
            <div className = "navbar-text" onMouseOver = {animate}>
                <span className = "nasa">NASA</span> 
                <span className = "apod"> | <b>APOD</b></span>
            </div>
            <img src = {orbit} className = {expand ? "orbit rotate" : "orbit"}></img>
        </div>
    )
}

export default NavBar;