// NPM Modules
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue} from 'firebase/database'
// Config details
import app from '../../firebase';

const BoredForm = () => {

    // const [events, setEvents] = useState([])
    const [eventNameInput, setEventNameInput] = useState("")
    const [hostNameInput, setHostNameInput] = useState("")
    const [descriptionInput, setDescriptionInput]=useState('')
    const [eventTimeInput, setEventTimeInput] = useState('')
    const [locationInput, setLocationInput] = useState('')

    useEffect(() =>{
        const database = getDatabase(app)
        const dbRef = ref(database, "/bored")
        onValue(dbRef, (response) => {
            // console.log(response.val());
            // create variable to hold new state.
            const newState = []
            const data = response.val();
            // console.log(data)
            // setEvents(newState)
        })
    },[])



    const handleEventNameInputChange = (e) =>{
        setEventNameInput(e.target.value);
    }
    const handleHostInputChange = (e) =>{
        setHostNameInput(e.target.value);
    }
    const handlEventTimeInputChange = (e) =>{
        setEventTimeInput(e.target.value);
    }
    const handleLocationInputChange = (e) =>{
        setLocationInput(e.target.value);
    }
    const handleDescriptionInputChange = (e) =>{
        setDescriptionInput(e.target.value);
    }

    const savedInputData = {
        eventName:eventNameInput,
        hostName:hostNameInput,
        eventDescription: descriptionInput,
        eventLocation:locationInput,
        eventTime: eventTimeInput,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const database = getDatabase(app)
        const dbRef = ref(database, "/bored")
        // push info to firebase
        push(dbRef, savedInputData);
        // clear inputs
        setEventNameInput('')
        setHostNameInput('')
        setEventTimeInput('')
        setLocationInput('')
        setDescriptionInput('')
        

    }
  
    return(
        <>
        <div className="eventFormContainer" onSubmit={handleSubmit}>
            <form className='createEvent' action='submit'>
                <label htmlFor='event'>Name your event</label>
                <input 
                type="text"
                onChange={handleEventNameInputChange}
                value={eventNameInput}
                required 
                />
                <label htmlFor='host'>Host name</label>
                <input 
                type="text"
                id='host'
                value={hostNameInput}
                onChange={handleHostInputChange}
                required 
                />
                <label>Start time</label>
                <input 
                type="text"
                value={eventTimeInput}
                onChange={handlEventTimeInputChange}
                required 
                />
                <label>Location</label>
                <input 
                type="text"
                value={locationInput}
                onChange={handleLocationInputChange}
                required 
                />
                {/* <label>Enter Emails</label>
                <input 
                type="text"
                required 
                /> */}
                <label>Description of event</label>
                <input 
                type="text"
                id='event'
                value={descriptionInput}
                onChange={handleDescriptionInputChange}
                required
                />
                <Link to={`/boredComponent/boredEventCard`}>
                <button>Create event</button>
                </Link>
            </form>
        </div>
        </>
    )
}

export default BoredForm