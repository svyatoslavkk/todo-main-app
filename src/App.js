import logo from './logo.svg';
import './App.css';
import bgMobileLight from './bg-mobile-light.jpg';
import iconMoon from './icon-moon.svg';
import iconCheck from './icon-check.svg';
import iconCross from './icon-cross.svg';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <h1>TODO</h1>
        <div className='toggle-mode-block'>
          <img className='toggle-button' src={iconMoon} alt="Icon Moon" />
        </div>
      </header>
      <div className='input-block'>
        <input className='input-todo' placeholder='Create a new todo' />
        <div className='circle-icon'></div>
      </div>
      <main className='todo-list'>
        <div className='todo-item'>
          <div className='circle-icon'></div>
          <p className='todo-item-text'>Go to bed</p>
          <img className='icon-cross' src={iconCross} alt="Icon Cross" />
        </div>
        <div className='todo-stats'>
          <p className='items-left'></p>
          <button className='clear-completed' type="button"></button>
        </div>
      </main>
      <div className='choose-category-todos'>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
      <footer>
        <h2>Drag and drop to reorder list</h2>
      </footer>
      {/* <img className='bg-mobile' src={bgMobileLight} alt="Background Light Mode" /> */}
    </div>
  );
}

export default App;
