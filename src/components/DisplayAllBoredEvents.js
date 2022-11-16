import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import app from '../firebase'

const DisplayAllBoredEvents = () =>{
    const [boredEvents, setBoredEvents] = useState([])

    useEffect(() => {
        const database = getDatabase(app)
        const dbRefBored = ref(database, "/bored")
        onValue(dbRefBored, (response) =>{
            const boredArray = []
            const dataBored = response.val();
            for(let key in dataBored){
                boredArray.unshift({key:key, name:dataBored[key]})
            }
            setBoredEvents(boredArray)
        })
    },[])
    
    const boredURL = "/boredinvite/"

    return(

        <div className="eventListContainer">
            <h3>Idea's we helped inspire</h3>
            <ul>
                {
                  boredEvents.map((event) => {
                    console.log(event)
                    return(
                        <div className="allEventsCard">
                            <li key={event.key}>
                                <p>{event.name.eventName}</p>
                                <a href={`${boredURL}${event.key}` }>
                                    <button>Click here to learn more</button>
                                </a>
                            </li>
                        </div>
                    )
                  })  
                }
            </ul>
        </div>
    )
}

export default DisplayAllBoredEvents