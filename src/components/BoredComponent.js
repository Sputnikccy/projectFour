import axios from "axios";
import { set } from "firebase/database";
import { useState, useEffect } from 'react';
import BoredDisplay from "./BoredDisplay";
import Error from "./Error";

const BoredComponent = () => {


    //track data from API
    const [activities, setActivities] = useState('');

    //track data of user's choice of event type
    const [userChoice, setUserChoice] = useState('')

    //track data of user's choice of participant number
    const [userNumber, setUserNumber] = useState('')

    // //track if 'Failed to query due to error in arguments' happens
    const [isErrorVisible, setIsErrorVisible] = useState(false)

    

    const getActivity = (e) => {

        e.preventDefault();

        axios({
            url: `http://www.boredapi.com/api/activity?type=${userChoice}&participants=${userNumber}`,
            method: 'GET',
            dataResponse: 'json',
        }).then((res) => {
            console.log(res)
            setActivities(res.data)
            console.log(activities.error)
        }).catch((error) => {
            alert('no activities matches, please select again!')
        })

        



        // set when to dispaly error and when to display exsiting events
        if (activities.error) {
            setIsErrorVisible(true)
            console.log('error happens!')
        } else if (!activities.error) {
            setIsErrorVisible(false)
            console.log('no error!')
        }

        // console.log(isErrorVisible)

    }


    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    const handleUserNumber = (e) => {
        setUserNumber(e.target.value)
    }




    return (
        <div>
            <form action="submit" onSubmit={getActivity}>

                {/* sr-only not working here, need to be figured out later */}
                <label htmlFor="choice" className='sr-only'>Please select the event type</label>
                <select
                    id='choice'
                    onChange={handleUserChoice}
                    value={userChoice}
                     >
                    <option value="title"  selected>Select Type</option>
                    <option value="education">education</option>
                    <option value="recreational">recreational</option>
                    <option value="social">social</option>
                    <option value="diy">diy</option>
                    <option value="charity">charity</option>

                </select>

                {/* sr-only not working here, need to be figured out later */}
                <label htmlFor="number" className='sr-only'>Please select the participant number</label>
                <select
                    id='number'
                    onChange={handleUserNumber}
                    value={userNumber} >
                    <option value="title"  selected>Select Type</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button >Click for activities</button>

            </form>

            {
            isErrorVisible
            ?<Error/>
            :<BoredDisplay activities={activities}/>
           }



            {/* <BoredDisplay activities={activities} /> */}

        </div>
    );





}


export default BoredComponent