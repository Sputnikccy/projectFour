import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from "axios";
import app from '../firebase'



const DisplayAllEvents = () => {
    // Users enter this page
    // They are greeted with a list of events other users have created.
    // users can click to open the items displayed and can see events.
    const [tmEvents, setTmEvents] = useState([])

    useEffect(() => {
        const database = getDatabase(app)
        // const dbRefBored = ref(database, "/bored")
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

    // const handleClick = (e) =>{
    //     console.log(e.target.value)
    //     const apiDada = (id) => {
    //         axios({
    //             url: `https://app.ticketmaster.com/discovery/v2/events/${id}`,
    //             method: 'GET',
    //             dataResponse: 'json',
    //             params: {
    //                 apikey: '15DjuOnWDIAkW8iE9JGNwLR6qLSvAcjU',
    //             }
    //         }).then((response) => {
    //             console.log(response.data)
    //         //    setEvent(response.data)
               
    //         })
    //     }
    // }
    
    const tmURL =  "/tmcard/"
    console.log(tmURL)
    
    return(
        <section className='allEventsSection'>
            <h2>Check out all these events people have made!</h2>
            <ul>
                {
                  tmEvents.map((event) =>{
                    console.log(event)
                    return(
                        <div className="allEventsCard">
                            <li key={event.key}>
                            <p>{event.name.event}</p>
                            <a href={`${tmURL}${event.key}` }>
                                <button>Click here to learn more</button>
                            </a>
                        </li>
                        </div>
                    )
                  })  
                }
            </ul>
        </section>
    )
}

export default DisplayAllEvents
{/* <Link to={`/tmcard/${event.key}`}>
</Link> */}