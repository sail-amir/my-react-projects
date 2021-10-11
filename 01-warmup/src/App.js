import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  return (
    <div className="App">
      <h1>Let's start programming</h1>
      <p>This is my first react!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
