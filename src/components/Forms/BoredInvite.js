import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom'
import {getDatabase, ref, get} from 'firebase/database'
import bannerPicture from "../../assets/havingFun.jpg"
// Config details
import app from '../../firebase';

const BoredInvite =() =>{

    //track data from database
    const [activity, setActivity] = useState();

    //track data from API call
    const [event, setEvent] = useState();



   //get params AKA firebase node key
   const urlParamsValue = useParams();

   const userId = urlParamsValue.invites;



   useEffect(() => {
    const database = getDatabase(app);
    const userRef = ref(database, `bored/${userId}`);
    get(userRef).then((data) => {
        setEvent(data.val())
        // this feeds apiCheck the stored activityID key from Firebase to fetch from boredAPI.
        apiCheck(data.val().activityId)
    }).catch((error)=>{
        alert('Error.')
    })
}, [])

const apiCheck = (key) => {
    axios({
        url: `http://www.boredapi.com/api/activity?key=${key}`,
        method: 'GET',
        dataResponse: 'json'
    })
        .then((response) => {
            setActivity(response.data);
        })
        axios({
            url: 'https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'xMApnHMvGsHXF8WNkU53mf3KirR2oQ8ZS6YYr-M-NAU',
                query: `${activity.activity}`,
                per_page: 1
            }
        }).then((response) =>{
            const apiImage = response.data.results[0].urls.thumb;
            setActivityImage(apiImage)
            console.log(apiImage)
        })
}
const [activityImage, setActivityImage] = useState({})




if(!activity||!event){
    return null
}

    

    return(

        <section className="inviteCard">
            <div className="imgContainer">
                <img src={bannerPicture} alt="A line of people holding hands" />
            </div>
            <div className="cardContent">
                <h2 className="eventTheme">{event.eventName}</h2>
                <div className="descriptionText">
                    <p>{event.eventDescription}</p>
                </div>
                <p className="host">From <span>{event.hostName}</span></p>
                <div className="activityInfo">
                <p className="activityTitle">{activity.activity}</p>
                    <img className="inviteImage" src={activityImage}  />
                    <p>🗺 {event.eventLocation}</p>
                    <p>🕰 {event.eventTime}</p>
                </div>
                
                
            </div>
            

        </section>


        // <>
        // <div className="imgContainer">
        // <img src={bannerPicture} alt="" />
        // </div>
        // <div className="inviteCard">
        //     <h2>{event.eventName}</h2>
        //     <img className="inviteImage" src={activityImage}  />
        //     <p>{event.hostName}</p>
        //     {/* <p>{event.eventLocation}</p>
        //     <p>{event.eventTime}</p> */}
        //     <p>{event.eventDescription}</p>
        //     <p>{activity.activity}</p>
        // </div>
        // </>
    )
}

export default BoredInvite;