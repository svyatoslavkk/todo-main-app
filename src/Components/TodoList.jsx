import React from "react";
import iconCross from '../icon-cross.svg';

export default function TodoList () {
    return (
        <main className='todo-list'>
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