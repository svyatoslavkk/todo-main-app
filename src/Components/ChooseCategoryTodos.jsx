import React from "react";

export default function ChooseCategoryTodos ({ darkMode, filter, setFilter }) {

    const chooseCategoryTodosStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
    };

    return (
        <div className='choose-category-todos' style={chooseCategoryTodosStyle}>
            <button
                type="button"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active" : ""}
            >
                All
            </button>
            <button
                type="button"
                onClick={() => setFilter("active")}
                className={filter === "active" ? "active" : ""}
            >
                Active
            </button>
            <button
                type="button"
                onClick={() => setFilter("completed")}
                className={filter === "completed" ? "active" : ""}
            >
                Completed
            </button>
        </div>
    )
}