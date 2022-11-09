// NPM Modules
import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue} from 'firebase/database'
// Config details
import firebaseConfig from '../firebase';

const BoredForm = () => {

    const [events, setEvents] = useState([])

    useEffect(() =>{
        const database = getDatabase(firebaseConfig)
        const dbRef = ref(database)
        onValue(dbRef, (response) => {
            console.log(response.val)
        })
    },[])
  
    return(
        <>
        <div className="eventFormContainer">
            <form className='createEvent'>
                <label>Event name</label>
                <input 
                type="text"
                required 
                />
                <label>Host name</label>
                <input 
                type="text"
                required 
                />
                <label>Start time</label>
                <input 
                type="text"
                required 
                />
                <label>Location</label>
                <input 
                type="text"
                required 
                />
                <label>Enter Emails</label>
                <input 
                type="text"
                required 
                />
                <label>Description of event</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                required>
                Enter your event description here.
                </textarea>
                {/* <button onClick={""}>Create event</button> */}
            </form>
        </div>

        <div className="eventCardTest">
            <p>this is a test</p>
            <ul>
                {events.map((event)=> {
                    return(
                        <li>{event}</li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default BoredForm