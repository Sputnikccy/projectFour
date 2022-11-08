// import './App.css';
import "./styles/style.scss";
import Header from './components/Header';
import { Link, Routes, Route } from 'react-router-dom'
import TestComponent from './components/TestComponent';

function App() {


  return (
    <div className="App">
      <Header />
      <TestComponent />
    </div>
  );
}

export default App;
