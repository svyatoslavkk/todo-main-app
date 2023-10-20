import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import InputBlock from './Components/InputBlock';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import bgMobileLight from './bg-mobile-light.jpg';
import iconMoon from './icon-moon.svg';
import iconCheck from './icon-check.svg';
import iconCross from './icon-cross.svg';

function App() {
  return (
    <div className='container'>
      <Header />
      <InputBlock />
      <TodoList />
      <ChooseCategoryTodos />
      <Footer />
      {/* <img className='bg-mobile' src={bgMobileLight} alt="Background Light Mode" /> */}
    </div>
  );
}

export default App;
