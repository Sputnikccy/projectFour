import { getDatabase, ref, push, onValue, get } from 'firebase/database';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import app from '../firebase';



const TmTestForm = () => {

    const urlParamsValue = useParams();
   
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

            for (let key in data) {
                newState.unshift({ key: key, name: data[key] })
            }

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
        activityId: urlParamsValue.idd,
    }


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

        if(!eventInput||!hostInput||!descriptionInput){
            alert('Please fill the form, thanks!')
        } else{
            navigate(`/tmcard/${invitations[0].key}`)
        }
    }
   
   

    return (
     
        <div className="tmForm wrapper" >
         
        <h2 >
            <span class="letter">let's </span>&nbsp; 
            <span class="letter"> have</span>&nbsp;
            <span class="letter"> fun</span> 
            <span class="letter"> ! </span>
            
        </h2>
        <div className='formContainer'>
            <form  onSubmit={handleOnSubmit} >
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
                <textarea type="text"
                    id='event'
                    onChange={handleDescriptionInputChange}
                    value={descriptionInput}
                    row='30'
                    cols='30'
                   
                > </textarea>

                <button >submit</button>
            </form>
        </div>
        </div >
    )
}

export default TmTestForm

