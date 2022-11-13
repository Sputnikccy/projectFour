// import sass styling
import './sass/App.scss';
// utilities
import { Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
// components
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
import BoredComponent from './components/BoredComponent';
import TmTestForm from './components/TmTestForm';
import TmTestCard from './components/TmTestCard';
import BoredInvite from './components/Forms/BoredInvite';
import app from './firebase';
import { useNavigate } from "react-router-dom";


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
        <Route path='/tmform/:idd' element={<TmTestForm/>}/>
        <Route path='/tmcard/:idd' element={<TmTestCard/>}/>
        <Route path='/boredComponent' element={<BoredComponent/>}/>
        <Route path='/boredForm/:key' element={<BoredForm />}/>
        <Route path='/boredinvite/:invites' element={<BoredInvite />}/>
      </Routes>
    </div>
  );
}

export default App;