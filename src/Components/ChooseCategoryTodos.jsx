import React from "react";

export default function ChooseCategoryTodos ({ darkMode }) {

    const chooseCategoryTodosStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
    };

    return (
        <div className='choose-category-todos' style={chooseCategoryTodosStyle}>
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
        </div>
    )
}