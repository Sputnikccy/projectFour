import './App.scss';
import Header from './components/Header';
import { Link, Routes, Route } from 'react-router-dom'
// components
import TestComponent from './components/TestComponent';
import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
function App() {


  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        {/* TicketMaster component will replace the below component, this was just for testing routing. */}
        <Route path='/testComponent' element={<TestComponent/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
 {/* <TestComponent /> */}
      {/* <BoredForm /> */}