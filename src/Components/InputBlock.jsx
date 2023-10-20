import React from "react";

export default function InputBlock () {
    return (
        <div className='input-block'>
            <input className='input-todo' placeholder='Create a new todo' />
            <div className='circle-icon'></div>
        </div>
    )
}