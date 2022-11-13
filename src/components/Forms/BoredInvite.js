import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'
import {getDatabase, ref, get} from 'firebase/database'
// Config details
import app from '../../firebase';

const BoredInvite =() =>{

    //track data from database
    const [activity, setActivity] = useState();

    //track data from API call
    const [event, setEvent] = useState();


   //get params AKA firebase node key
   const urlParamsValue = useParams();
//    console.log(urlParamsValue.invites)
   const userId = urlParamsValue.invites;
// console.log(userId)


   useEffect(() => {
    const database = getDatabase(app);
    const userRef = ref(database, `bored/${userId}`);
    get(userRef).then((data) => {
        // console.log(data.val())
        setEvent(data.val())
        // this feeds apiCheck the stored activityID key from Firebase to fetch from boredAPI.
        apiCheck(data.val().activityId)
    }).catch((error)=>{
        alert('error')
    })
}, [])

const apiCheck = (key) => {
    axios({
        url: `http://www.boredapi.com/api/activity?key=${key}`,
        method: 'GET',
        dataResponse: 'json'
    })
        .then((response) => {
            // console.log(response.data)
            setActivity(response.data);
        })
}
if(!activity||!event){
    return null
}

    

    return(
        <div className="inviteCard">
            <h2>{event.eventName}</h2>
            <h3>{event.hostName}</h3>
            <h4>{event.eventLocation}</h4>
            <p>{event.eventTime}</p>
            <p>{event.eventDescription}</p>
            <p>{activity.activity}</p>
        </div>
    )
}

export default BoredInvite;