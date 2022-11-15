// NPM Modules
import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue} from 'firebase/database'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// Config details
import app from '../../firebase';

const BoredForm = () => {

    const urlParamsValue = useParams();
    // console.log(urlParamsValue.key);

    // these states track user input within the form.
    const [eventNameInput, setEventNameInput] = useState("")
    const [hostNameInput, setHostNameInput] = useState("")
    const [descriptionInput, setDescriptionInput]=useState("")
    const [eventTimeInput, setEventTimeInput] = useState("")
    const [locationInput, setLocationInput] = useState("")
    let navigate = useNavigate();

      // This state tracks data from firebase DB
      const [invites, setInvites] = useState([]);
    //   console.log(invites[0].key)

    useEffect(() =>{
        const database = getDatabase(app)
        const dbRef = ref(database, "/bored")
        // new state was in the onValue call.
        const newState = []
        onValue(dbRef, (response) => {
            console.log(response);
            // create variable to hold new state.
            const data = response.val();
            for (let key in data) {
                newState.unshift({ key: key, name: data[key] })
            }
            // update state with new array.
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
        activityId: urlParamsValue.key
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const database = getDatabase(app)
        const dbRef = ref(database, "/bored")
        // push info to firebase
        push(dbRef, savedInputData)
        setEventNameInput('')
        setHostNameInput('')
        setEventTimeInput('')
        setLocationInput('')
        setDescriptionInput('')
        navigate(`/boredinvite/${invites[0].key}`)
        // clear inputs
    }
  
    return(
        <>
        <div className="eventFormContainer" >
            <form 
            className='createEvent' 
            onSubmit={handleSubmit}
            action='submit'>
                <h2>Let's have fun!</h2>
                <label htmlFor='event'>Event Name</label>
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
                <button className='createButton'>Create event</button>
            </form>
        </div>
        </>
    )
}

export default BoredForm