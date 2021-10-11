import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    { title: "car insurance", amount: 234, date: new Date(2012, 2, 24) },
    { title: "house insurance", amount: 234, date: new Date(2015, 5, 2) },
    { title: "appliances insurance", amount: 234, date: new Date(2018, 2, 13) },
    { title: "grocery", amount: 234, date: new Date(2020, 3, 10) },
  ];
  return (
    <div className="App">
      <h1>Let's start programming</h1>
      <p>This is my first react!</p>
      <Expenses items = {expenses}/>
    </div>
  );
};

export default App;
