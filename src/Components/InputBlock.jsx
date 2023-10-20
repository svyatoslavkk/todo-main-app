import React from "react";

export default function InputBlock ({ darkMode }) {

    const inputBlockStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
      color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)',
    };

    return (
        <div className='input-block' style={inputBlockStyle}>
            <div className='circle-icon'></div>
            <input className='input-todo' placeholder='Create a new todo...' style={inputBlockStyle} />
        </div>
    )
}