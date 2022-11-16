import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import {  Link, Outlet } from 'react-router-dom'
import app from '../firebase'



const DisplayAllEvents = () => {
    // Users enter this page
    // They are greeted with a list of events other users have created.
    // users can click to open the items displayed and can see events.
    return(
        <section className='allEventsSection'>
            <h2>Check out all these events people have made!</h2>
            <Link to='/displayAllEvents/displayAllTmEvents'>
            <button>tm</button>
            </Link>
            <Link to='/displayAllEvents/displayAllBoredEvents'>
            <button>bored</button>
            </Link>
            <Outlet />
        </section>
    )
}

export default DisplayAllEvents
{/* <Link to={`/tmcard/${event.key}`}>
</Link> */}