import React from "react";

export default function Header () {
    return (
        <header className='header'>
            <h1>TODO</h1>
            <div className='toggle-mode-block'>
                <img className='toggle-button' src={iconMoon} alt="Icon Moon" />
            </div>
        </header>
    )
}