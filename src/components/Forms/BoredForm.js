// NPM Modules
import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue} from 'firebase/database'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// Config details
import app from '../../firebase';

const BoredForm = () => {

    const urlParamsValue = useParams();
    console.log(urlParamsValue);

    // const [events, setEvents] = useState([])
    const [eventNameInput, setEventNameInput] = useState("")
    const [hostNameInput, setHostNameInput] = useState("")
    const [descriptionInput, setDescriptionInput]=useState('')
    const [eventTimeInput, setEventTimeInput] = useState('')
    const [locationInput, setLocationInput] = useState('')
    let navigate = useNavigate();

      // this state will track data from db
      const [invites, setInvites] = useState([]);
    //   console.log(invites[0].key)

    useEffect(() =>{
        const database = getDatabase(app)
        const dbRef = ref(database, "/bored")

        onValue(dbRef, (response) => {
            // console.log(response.val());
            // create variable to hold new state.
            const newState = []
            const data = response.val();
            for (let key in data) {
                newState.unshift({ key: key, name: data[key] })
            }
            setInvites(newState)
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
        // activityId: urlParamsValue.invites
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
        navigate(`/boredinvite/${invites[0].key}`)
    }
  
    return(
        <>
        <div className="eventFormContainer" >
            <form 
            className='createEvent' 
            onSubmit={handleSubmit} 
            action='submit'>
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
                <button>Create event</button>
            </form>
        </div>
        </>
    )
}

export default BoredForm