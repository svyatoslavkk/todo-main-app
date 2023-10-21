import React from "react";
import iconCross from '../icon-cross.svg';
import iconCheck from '../icon-check.svg';

export default function TodoList ({
    darkMode,
    tasks,
    toggleTaskStatus,
    deleteTask,
    clearCompletedTasks,
  }) {

    const todoListStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
      color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)',
    };

    return (
        <main className='todo-list' style={todoListStyle}>
            {tasks.map((task) => (
                <div className={`todo-item ${task.completed ? "completed" : ""}`} key={task.id}>
                    {task.completed ? (
                        <img
                        className='icon-check'
                        src={iconCheck}
                        alt='Icon Check'
                        onClick={() => toggleTaskStatus(task.id)}
                        />
                    ) : (
                        <div className='circle-icon' onClick={() => toggleTaskStatus(task.id)}></div>
                    )}
                        <p className={`todo-item-text ${task.completed ? "completed-text" : ""}`}>{task.text}</p>
                    <img 
                        className='icon-cross' 
                        src={iconCross} 
                        alt="Icon Cross" 
                        onClick={() => deleteTask(task.id)}
                    />
                </div>
            ))}
            <div className='todo-stats'>
                <p className='items-left'>{tasks.filter((task) => !task.completed).length} items left</p>
                <button className='clear-completed' type="button" onClick={clearCompletedTasks}>Clear Completed</button>
            </div>
        </main>
    )
}