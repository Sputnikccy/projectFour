import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import {getDatabase, ref, get} from 'firebase/database'
// Config details
import app from '../../firebase';
import { act } from "react-dom/test-utils";



const BoredInvite =() =>{

    //track data from database
    const [activity, setActivity] = useState({});
    console.log(activity)
    //track data from API call
    const [event, setEvent] = useState({});
    // console.log(event)

    const {name}=event;
//    console.log(name)

   //get params AKA firebase node key
   const urlParamsValue = useParams();
//    console.log(urlParamsValue);
   const userId = urlParamsValue.invites;
//    console.log(userId)

   useEffect(() => {
    const database = getDatabase(app);
    const userRef = ref(database, `bored/${userId}`);
    get(userRef).then((data) => {
        console.log(data.val())
        setActivity(data.val())
    }).catch((error)=>{
        alert('error')
    })
}, [])
    

    return(
        <div className="inviteCard">
            <h2>{activity.eventName}</h2>
            <h3>{activity.hostName}</h3>
            <h4>{activity.eventLocation}</h4>
            <p>{activity.eventTime}</p>
            <p>{activity.eventDescription}</p>
        </div>
    )
}

export default BoredInvite;