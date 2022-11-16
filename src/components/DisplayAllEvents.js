import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import app from '../firebase'
import DisplayAllBoredEvents from './DisplayAllBoredEvents'
import DisplayAllTmEvents from './DisplayAllTmEvents'



const DisplayAllEvents = () => {
    // Users enter this page
    // They are greeted with a list of events other users have created.
    // users can click to open the items displayed and can see events.
   
    
    
    return(
        <section className='allEventsSection'>
            <h2>Check out all these events people have made!</h2>
            {/* <button>TM</button>
            <button>Bored</button> */}
            <DisplayAllTmEvents />
            <DisplayAllBoredEvents />
        </section>
    )
}

export default DisplayAllEvents
{/* <Link to={`/tmcard/${event.key}`}>
</Link> */}