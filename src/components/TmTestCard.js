import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue, get } from 'firebase/database';
import app from '../firebase'

const TmTestCard = () => {
    //track data from database
    const [activity, setActivity] = useState(null);

    //track data from API call
    const [event, setEvent] = useState(null);

   console.log('change')


    //get params AKA firebase node key
    const urlParamsValue = useParams();
    console.log(urlParamsValue.idd);
    const userId = urlParamsValue.idd;
    console.log(userId)


    useEffect(() => {
        const database = getDatabase(app);

        const userRef = ref(database, `tm/${userId}`);

        get(userRef).then((data) => {
            console.log(data.val())
            setActivity(data.val())

            apiDada(data.val().activityId)
            console.log(data.val().activityId)
           
        }).catch((error)=>{
            alert(error)
        })

    }, [])

    const apiDada = (id) => {
        axios({
            url: `https://app.ticketmaster.com/discovery/v2/events/${id}`,
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: '15DjuOnWDIAkW8iE9JGNwLR6qLSvAcjU',

            }
        }).then((response) => {
            console.log(response.data)
           setEvent(response.data)
           
        })
    }

        if(!activity||!event){
            return null
        }

    return (

        <div className="tmCard">

            <h2 className="eventTheme">

                {activity.event}


            </h2>
            <p className="description">

                {activity.description}
            </p>
            <p className="host">
                from {activity.host} 
              
            </p>
            
             
            <div className="activityInfo">
                <h3 className="activityTitle">{event.name}</h3>
                <img src={event.images[4].url} alt="" />
                <p>start time: {event.dates.start.localDate} {event.dates.start.localTime}</p>
                <p>venue: {event._embedded.venues[0].name}</p>
            </div> 

        </div>
    )
}

export default TmTestCard