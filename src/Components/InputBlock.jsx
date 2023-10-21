import React, {useState} from "react";

export default function InputBlock ({ darkMode, addTask }) {
    const [taskText, setTaskText] = useState("");

    const handleInput = (event) => {
      setTaskText(event.target.value);
    };

    const handleEnter = (event) => {
      if (event.key === "Enter") {
        addTask(taskText); 
        setTaskText(""); 
      }
    };

    const inputBlockStyle = {
      backgroundColor: darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)',
      color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(237, 14%, 26%)',
    };

    return (
        <div className='input-block' style={inputBlockStyle}>
            <div className='circle-icon'></div>
            <input
                className='input-todo'
                placeholder='Create a new todo...'
                value={taskText}
                onChange={handleInput}
                onKeyPress={handleEnter}
                style={inputBlockStyle}
            />
        </div>
    )
}