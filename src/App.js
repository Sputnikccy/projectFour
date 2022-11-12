// import sass styling
import './sass/App.scss';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom'
// components
import Header from './components/Header';
import TestComponent from './components/TestComponent';
// import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
import BoredComponent from './components/BoredComponent';
import TmTestForm from './components/TmTestForm';
import TmTestCard from './components/TmTestCard';
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
      
        <Route path='/testComponent' element={<TestComponent/>}/>
        <Route path='/boredComponent' element={<BoredComponent/>}/>
        <Route path='/tmform/:idd' element={<TmTestForm/>}/>
       
        <Route path='/tmcard/:idd' element={<TmTestCard/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
 {/* <TestComponent /> */}
      {/* <BoredForm /> */}