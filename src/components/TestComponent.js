import axios from "axios"
import { useState, useEffect } from 'react'


const TestComponent = () => {

    const [allEvents, setAllEvents] = useState([])
    

    useEffect( () => {
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json?',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: 'oEVr2fMeIekRnZZO4wERgOHqw8QY7vQA',
                //city name
                // city:'Toronto',
                //sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc', 'distance,date,asc', 'onSaleStartDate,asc', 'id,asc', 'venueName,asc', 'venueName,desc', 'random'
                // sort:'date,asc',
                //page number
                page:'10',
                // returned array size
                size:'30',
                countryCode:'CA'
            }
        }).then((eventArray) => {
            // console.log(eventArray.data._embedded.events)
            setAllEvents(eventArray.data._embedded.events)
        })
    },[])

    return(
        <>
        <h3>Hello, this is a test component!!! !!!</h3>
        <ul className="eventCatalogue">
          {
            allEvents.map((eventObject) => {
                // console.log(eventObject.images)
                return(
                    
                    <li className="eventCard" key={eventObject.id}>
                        <h4>{eventObject.name}</h4>
                        <img className="testImg" src={eventObject.images[4].url} alt={eventObject.name} />
                        <p>{eventObject.info}</p>
                    </li>
                )
            })
          }

        </ul>
        </>
        

    )
}

export default TestComponent