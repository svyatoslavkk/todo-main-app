import React from "react";
import iconCross from '../icon-cross.svg';

export default function TodoList ({ darkMode }) {

    const todoListStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
      color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)',
    };

    return (
        <main className='todo-list' style={todoListStyle}>
            <div className='todo-item'>
                <div className='circle-icon'></div>
                <p className='todo-item-text'>Go to bed</p>
                <img className='icon-cross' src={iconCross} alt="Icon Cross" />
            </div>
            <div className='todo-item'>
                <div className='circle-icon'></div>
                <p className='todo-item-text'>Go to bed</p>
                <img className='icon-cross' src={iconCross} alt="Icon Cross" />
            </div>
            <div className='todo-item'>
                <div className='circle-icon'></div>
                <p className='todo-item-text'>Go to bed</p>
                <img className='icon-cross' src={iconCross} alt="Icon Cross" />
            </div>
            <div className='todo-item'>
                <div className='circle-icon'></div>
                <p className='todo-item-text'>Go to bed</p>
                <img className='icon-cross' src={iconCross} alt="Icon Cross" />
            </div>
            <div className='todo-item'>
                <div className='circle-icon'></div>
                <p className='todo-item-text'>Go to bed</p>
                <img className='icon-cross' src={iconCross} alt="Icon Cross" />
            </div>
            <div className='todo-stats'>
                <p className='items-left'>5 items left</p>
                <button className='clear-completed' type="button">Clear Completed</button>
            </div>
        </main>
    )
}