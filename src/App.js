// import sass styling
import './sass/App.scss';

import { Link, Routes, Route } from 'react-router-dom'
// components
import Header from './components/Header';
// import TestComponent from './components/TestComponent';
import Ticketmaster from  './components/Ticketmaster';
// import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
import BoredComponent from './components/BoredComponent';


function App() {


  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        {/* TicketMaster component will replace the below component, this was just for testing routing. */}
        <Route path='/ticketmaster' element={<Ticketmaster/>}/>
        <Route path='/boredComponent' element={<BoredComponent/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
 {/* <TestComponent /> */}
      {/* <BoredForm /> */}