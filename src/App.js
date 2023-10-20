import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import InputBlock from './Components/InputBlock';
import TodoList from './Components/TodoList';
import ChooseCategoryTodos from './Components/ChooseCategoryTodos';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = {
    backgroundColor: darkMode ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)',
    color: darkMode ? 'hsl(236, 33%, 92%)' : 'hsl(236, 33%, 92%)',
  };

  return (
    <div className="container" style={containerStyle}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <InputBlock darkMode={darkMode} />
      <TodoList darkMode={darkMode} />
      <ChooseCategoryTodos darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
