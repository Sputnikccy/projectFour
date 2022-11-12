import axios from "axios"
import { useState, useEffect } from 'react';
import TmTestForm from "./TmTestForm";
import { Link } from 'react-router-dom';


const TestComponent = () => {
   

    const [allEvents, setAllEvents] = useState([])


    useEffect(() => {
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json?',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: '15DjuOnWDIAkW8iE9JGNwLR6qLSvAcjU',
                //city name
                // city:'Toronto',
                //sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc', 'distance,date,asc', 'onSaleStartDate,asc', 'id,asc', 'venueName,asc', 'venueName,desc', 'random'
                sort: 'date,asc',
                //page number
                // page: '10',
                // returned array size
                size: '30',
                countryCode: 'CA',
               
            }
        }).then((eventArray) => {
            console.log(eventArray.data._embedded.events)
            setAllEvents(eventArray.data._embedded.events)

        })
    }, [])



//test how to get id!
    // const handleOnClick = (e) => {

    //     console.log(e.target.parentNode.firstChild.innerHTML);

    //     //get each li element's id!!!!
    //     console.log(e.target.parentNode.id);
  
    // }

    return (
        <>
            <h3>Hello, this is a test component!!! !!! !!!</h3>
            <ul className="eventCatalogue">
                {
                    allEvents.map((eventObject) => {
                      
                        return (

                            
                                <li className="eventCard "  id={eventObject.id}  key={eventObject.id}>
                                    <h4>{eventObject.name}</h4>
                                    <img className="testImg" src={eventObject.images[4].url} alt={eventObject.name} />
                                    <p>{eventObject.info}</p>
                                    

                                    <Link to={`/tmform/${eventObject.id}`}>
                                       
                                        <button>
                                            create event</button>
                                    </Link>
                                </li>
                           


                        )
                    })
                }

            </ul>
        </>


    )
}

export default TestComponent