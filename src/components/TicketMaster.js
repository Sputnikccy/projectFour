import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ticketmaster = () => {
    const [events, setEvents] = useState([]);

    // second state value changes when a word is searched for /filtered
    const [filteredEvents, setFilteredEvents] = useState(events);

    useEffect( () => {
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json?',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: 'lmR81Nl9SRgC4fNvck5rb6rx61K4hy3b',
                secretkey: 'hZM0EAuYZBwv25Gt',
                size: '30',
                countryCode: 'CA',
                // city: '',
                // keyword:'',
                // category: '',
                // sort:''
                // categories: concert, club, sports, art, family, 
                // subcategories: rock, pop, comedy, religion, hip hop, rap, alternative, 
            }
        }).then( (eventArray) => {
            setEvents(eventArray.data._embedded.events)
            console.log(eventArray)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted!');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* form will have country, city, keyword options, categories */}
                <label htmlFor="keywords">Keywords</label>
                <input 
                name="keywords" 
                placeholder="Search for artists, venues or events" type="text"
                onChange={(event) => handleSubmit(event)}
                  />

                <label>country code</label>
                <input 
                placeholder="ie, CA / US / GB" 
                type="text"
                onChange={(event) => handleSubmit(event)}
                 />

                <label htmlFor="">city</label>
                <input 
                type="text"
                onChange={(event) => handleSubmit(event)}
                 />

                <label htmlFor="">category</label>
                <select 
                name="category" 
                id=""
                onChange={(event) => handleSubmit(event)}
                >
                    <option value="none">event category</option>
                    <option value="concert">concert</option>
                    <option value="sports">sports</option>
                    <option value="art">art</option>
                    <option value="family">family</option>
                </select>

                <label htmlFor="sort">sort</label>
                <select 
                name="sort" 
                id=""
                onChange={(event) => handleSubmit(event)}
                >
                    <option value="none">sort results</option>
                    <option value="date,asc">coming soon</option>
                    <option value="date,desc">coming later</option>
                    <option value="name,asc">alphabetical a-z</option>
                    <option value="name,desc">alphabetical z-a</option>
                </select>

                <button type="submit">
                    filter results
                </button> 

                {/* <button 
                type="submit"
                onClick={this.eventFilter}>
                filter results
                </button> */}

            </form>

            <h3>recommended events for you & your friends</h3>

            <ul className="eventCatalogue">
                {
                    events.map((eventObject) => {
                        return (
                            <li className="eventCard" key={eventObject.id}>
                                <h4>{eventObject.name}</h4>
                                <img 
                                className="testImg" 
                                src={eventObject.images[4].url} 
                                alt={eventObject.name} />
                                <p>{eventObject.info}</p>
                                <a 
                                href={eventObject.url} target="_blank">buy tickets</a>

                                {/* This link will go to Caiyi's component. Not sure yet if the correct element would be a link or a router/route */}
                                <Link to={`/tmform/${eventObject.id}`}>
                                        <button>
                                            Create event
                                        </button>
                                    </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )

};

export default Ticketmaster;