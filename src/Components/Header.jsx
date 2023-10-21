import React, {useState} from "react";
import iconMoon from '../icon-moon.svg';
import iconSun from '../icon-sun.svg';

export default function Header ({ darkMode, toggleDarkMode }) {

    return (
        <header className={`header ${darkMode ? 'dark' : ''}`} style={{zIndex: 2}}>
            <h1 style={{zIndex: 2}}>TODO</h1>
            <div className='toggle-mode-block' onClick={toggleDarkMode} style={{zIndex: 2}}>
                <img
                className='toggle-button'
                src={darkMode ? iconSun : iconMoon}
                alt={darkMode ? 'Icon Sun' : 'Icon Moon'}
                />
            </div>
        </header>
    )
}