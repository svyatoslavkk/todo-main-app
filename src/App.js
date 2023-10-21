import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import InputBlock from './Components/InputBlock';
import TodoList from './Components/TodoList';
import ChooseCategoryTodos from './Components/ChooseCategoryTodos';
import Footer from './Components/Footer';
import bgDesktopLight from './bg-desktop-light.jpg';
import bgDesktopDark from './bg-desktop-dark.jpg';
import bgMobileLight from './bg-mobile-light.jpg';
import bgMobileDark from './bg-mobile-dark.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }; 

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  })

  const containerStyle = {
    backgroundColor: darkMode ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 95%)',
    color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(236, 33%, 92%)',
  };

  return (
    <div className="container" style={containerStyle}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <InputBlock 
        darkMode={darkMode} 
        addTask={addTask}
      />
      <TodoList 
        darkMode={darkMode} 
        tasks={filteredTasks}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
        clearCompletedTasks={clearCompletedTasks}
      />
      <ChooseCategoryTodos darkMode={darkMode} filter={filter} setFilter={setFilter} />
      <Footer />
      <img className='bg-mobile' src={darkMode ? bgMobileDark : bgMobileLight} alt="Background Image" />
      <img className='bg-desktop' src={darkMode ? bgDesktopDark : bgDesktopLight} alt="Background Image" />
    </div>
  );
}

export default App;
