
import { getDatabase, ref, push, onValue, get } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TmTestCard from "./TmTestCard";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import app from '../firebase';



const TmTestForm = () => {

    const urlParamsValue = useParams();
    console.log(urlParamsValue.idd);
   

    // this state will track user inputs from the form
    const [eventInput, setEventInput] = useState('');
    const [hostInput, setHostInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    let navigate = useNavigate();

    // this state will track data from db
    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        const database = getDatabase(app);
        const dbRef = ref(database, "/tm");

        //create a new variable to store the new state
        const newState = [];

        onValue(dbRef, (response) => {
            const data = response.val();

            console.log(data)


            for (let key in data) {
                newState.unshift({ key: key, name: data[key] })
            }

            console.log(newState)
          

            //update state with the new array
            setInvitations(newState)  
        })
    }, [])


    //get input value to update every corresponding stateful value
    const handleEventInputChange = (e) => {
        setEventInput(e.target.value)
    }

    const handleHostInputChange = (e) => {
        setHostInput(e.target.value)
    }

    const handleDescriptionInputChange = (e) => {
        setDescriptionInput(e.target.value)
    }

    //gather user's inputs and activity id
    const savedInputData = {
        event: eventInput,
        host: hostInput,
        description: descriptionInput,
        activityId: urlParamsValue.idd
    }

    console.log(savedInputData)


    //control what happens after clicking "submit"
    const handleOnSubmit = (e) => {

        e.preventDefault();

        const database = getDatabase(app);
        const dbRef = ref(database, "/tm");

        //push user's inputs into firebase
        push(dbRef, savedInputData);

        //clear input
        setDescriptionInput('');
        setEventInput('');
        setHostInput('');

        navigate(`/tmcard/${invitations[0].key}`)


    }


    return (
       
        <div className="tmForm" >
            <h2>Let's have fun!</h2>
        
            <form action='submit' onSubmit={handleOnSubmit}>
                <label htmlFor="event">Event Name</label>
                <input type="text"
                    id='event'
                    onChange={handleEventInputChange}
                    value={eventInput}
                />

                <label htmlFor="host">Host Name</label>
                <input type="text"
                    id='host'
                    onChange={handleHostInputChange}
                    value={hostInput}
                />

                <label htmlFor="event">Description</label>
                <input type="text"
                    id='event'
                    onChange={handleDescriptionInputChange}
                    value={descriptionInput}
                />

                <button>submit</button>
            </form>


        </div >
    )
}

export default TmTestForm