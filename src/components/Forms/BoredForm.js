// NPM Modules
import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue} from 'firebase/database'
// Config details
import app from '../../firebase';

const BoredForm = () => {

    const [events, setEvents] = useState([])
    const [eventName, setEventName] = useState("")
    const [hostName, setHostName] = useState("")

    useEffect(() =>{
        const database = getDatabase(app)
        const dbRef = ref(database)
        onValue(dbRef, (response) => {
            const newState = []
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
            }
            setEvents(newState)
        })
    },[])

    const handleInputChange = (event) =>{
        setEventName(event.target.value);
        setHostName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const database = getDatabase(app)
        const dbRef = ref(database)
        push(dbRef, eventName);
        setEventName('')
    }
  
    return(
        <>
        <div className="eventFormContainer">
            <form className='createEvent' action='submit'>
                <label htmlFor='newEvent'>Name your event</label>
                <input 
                type="text"
                onChange={handleInputChange}
                value={eventName}
                required 
                />
                <label>Host name</label>
                <input 
                type="text"
                value={hostName}
                onChange={handleInputChange}
                required 
                />
                {/* <label>Start time</label>
                <input 
                type="text"
                required 
                />
                <label>Location</label>
                <input 
                type="text"
                required 
                /> */}
                {/* <label>Enter Emails</label>
                <input 
                type="text"
                required 
                /> */}
                {/* <label>Description of event</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="05"
                required>
                Enter your event description here.
                </textarea> */}
                <button onClick={handleSubmit}>Create event</button>
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