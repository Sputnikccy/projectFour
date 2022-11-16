// import sass styling
import './sass/App.scss';
// utilities
import { Link, Routes, Route } from 'react-router-dom'
// components
import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
import BoredComponent from './components/BoredComponent';
import TicketMaster from './components/TicketMaster'
import TmTestForm from './components/TmTestForm';
import TmTestCard from './components/TmTestCard';
import BoredInvite from './components/Forms/BoredInvite';
import DisplayAllEvents from './components/DisplayAllEvents'
import DisplayAllBoredEvents from './components/DisplayAllBoredEvents'
import DisplayAllTmEvents from './components/DisplayAllTmEvents'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/ticketMaster' element={<TicketMaster/>} />
        <Route path='/displayAllEvents' element={<DisplayAllEvents />}>
          <Route path='/displayAllEvents/displayAllTmEvents' element={<DisplayAllTmEvents/>}/>
          <Route path='/displayAllEvents/displayAllBoredEvents' element={<DisplayAllBoredEvents />}/>
        </Route>
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