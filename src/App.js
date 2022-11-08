import './App.scss';
import Header from './components/Header';
import { Link, Routes, Route } from 'react-router-dom'
import TestComponent from './components/TestComponent';
import BoredForm from './components/Forms/BoredForm';

function App() {


  return (
    <div className="App">
      <Header />
      {/* <TestComponent /> */}
      <BoredForm />
    </div>
  );
}

export default App;
