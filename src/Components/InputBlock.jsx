import React from "react";

export default function InputBlock () {
    return (
        <div className='input-block'>
            <div className='circle-icon'></div>
            <input className='input-todo' placeholder='Create a new todo...' />
        </div>
    )
}