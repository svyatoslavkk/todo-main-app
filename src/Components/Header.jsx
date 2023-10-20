import React, {useState} from "react";
import iconMoon from '../icon-moon.svg';
import iconSun from '../icon-sun.svg';

export default function Header ({ darkMode, toggleDarkMode }) {

    return (
        <header className={`header ${darkMode ? 'dark' : ''}`}>
            <h1>TODO</h1>
            <div className='toggle-mode-block' onClick={toggleDarkMode}>
                <img
                className='toggle-button'
                src={darkMode ? iconSun : iconMoon}
                alt={darkMode ? 'Icon Sun' : 'Icon Moon'}
                />
            </div>
        </header>
    )
}