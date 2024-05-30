import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/temperatureConverter';
import ToDoList from './components/toDoList';

function App() {
  return (
    <div className="App">
      <h3>Задание 1: Температурный конвертер с Material UI</h3>
      <TemperatureConverter />
      <h3>Задание 2: Список дел с Material UI</h3>
      <ToDoList />
    </div>
  );
}

export default App;
