import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import {  Link, Outlet } from 'react-router-dom'
import app from '../firebase'



const DisplayAllEvents = () => {
    const [tmEvents, setTmEvents] = useState([])

    useEffect(() => {
        const database = getDatabase(app)
        const dbRefTm = ref(database, "/tm")
        onValue(dbRefTm, (response) =>{
            const tmArray = []
            const dataTm = response.val();
            for(let key in dataTm){
                tmArray.unshift({key:key, name:dataTm[key]})
            }
            setTmEvents(tmArray)
        })
        
    },[])

    const tmURL =  "/tmcard/"
    // Users enter this page
    // They are greeted with a list of events other users have created
    // users can click to open the items displayed and can see events
    return(
        <section className='allEventsSection'>
            <main>
            <h2 className='allEventsHeading'>Check out events people have made</h2>
            <div className="allEventsButtons">
                

            <Link to='/displayAllEvents/displayAllTmEvents'>
                <button>💰</button>
            </Link>
            <Link to='/displayAllEvents/displayAllBoredEvents'>
                <button>🆓</button>
            </Link></div>
            <Outlet />
            <ul>
                {
                  tmEvents.map((event) =>{
                 
                    return(
                        <div className="allEventsCard">
                            <li key={event.key}>
                            <p>{event.name.event}</p>
                            <a className='inviteLink' href={`${tmURL}${event.key}` }>
                               Learn more
                            </a>
                        </li>
                        </div>
                    )
                  })  
                }
                
            </ul>
            </main>
        </section>
    )
}

export default DisplayAllEvents