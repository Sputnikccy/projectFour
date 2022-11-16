import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';

const TicketMaster = () => {
    const [events, setEvents] = useState([]);
    const [categoryChoice, setCategoryChoice] = useState('');
    const [sortChoice, setSortChoice] = useState('');
    const [cityChoice, setCityChoice] = useState('');

    useEffect(() => {
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json?',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: 'lmR81Nl9SRgC4fNvck5rb6rx61K4hy3b',
                secretkey: 'hZM0EAuYZBwv25Gt',
                size: '30',
                countryCode: 'CA',
            }
        }).then((eventArray) => {
            console.log(eventArray.data._embedded.events)
            setEvents(eventArray.data._embedded.events)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json?',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apikey: 'lmR81Nl9SRgC4fNvck5rb6rx61K4hy3b',
                secretkey: 'hZM0EAuYZBwv25Gt',
                size: '30',
                // countryCode: 'CA',
                classificationName: `${categoryChoice}`,
                sort: `${sortChoice}`,
                city: `${cityChoice}`,
                // keyword:'',
                // categories: concert, club, sports, art, family, 
                // subcategories: rock, pop, comedy, religion, hip hop, rap, alternative, 
            }
        }).then((eventArray) => {
            setEvents(eventArray.data._embedded.events)
            console.log(eventArray)
        }).catch((error) => {
            alert('Please change your selection and try again!')
            console.log('Error')
        })


        console.log('submitted!');
    }

    const handleOnChange = (e) => {
        setCategoryChoice(e.target.value)
    }

    const handleOthOnChange = (e) => {
        setSortChoice(e.target.value)
    }

    const handleThirdOnChange = (e) => {
        setCityChoice(e.target.value)
    }

    // const handleOnClick = (e) => {
    //     setEventInfo(document.getQuerySelector("p"));
    // }

    return (
        <>
            <div className='tmHeading'>
                <Link to={`/`}>
                    <h1>Flock of Friends</h1>
                </Link>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city">city</label>
                    <input 
                    type="text"
                    id="city"
                    placeholder="CITY"
                    value={cityChoice}
                    onChange={handleThirdOnChange}
                    />
                    <label htmlFor="category">category</label>
                    <select 
                    name="category" 
                    id="category"
                    className='categoryTM'
                    value={categoryChoice}
                    onChange={handleOnChange}
                    >
                        <option value="none">CATEGORY</option>
                        <option value="concert">CONCERT</option>
                        <option value="sports">SPORTS</option>
                        <option value="art">ART</option>
                        <option value="family">FAMILY</option>
                    </select>
                    <label htmlFor="sort">SORT</label>
                    <select 
                    name="sort" 
                    id="sort"
                    className='sortTM'
                    value={sortChoice}
                    onChange={handleOthOnChange}
                    >
                        <option value="none">SORT</option>
                        <option value="date,asc">COMING SOON</option>
                        <option value="date,desc">COMING LATER</option>
                        <option value="name,asc">ALPHABETICAL A-Z</option>
                        <option value="name,desc">ALPHABETICAL Z-A</option>
                    </select>
                    <button 
                    type="submit"
                    className='tmButton'>
                        FILTER
                    </button> 
                </form>
                <h2>recommended events for you & your friends</h2>
            </div>
            <div className='tmContent'>
                <ul className="eventCatalogue">
                    {
                        events.map((eventObject) => {
                            return (
                                <li className="eventCard" key={eventObject.id}>
                                    <h3>{eventObject.name}</h3>
                                    <img 
                                    className="testImg" 
                                    src={eventObject.images[4].url} 
                                    alt={eventObject.name} />
                                    <p> <span>when:</span> {eventObject.dates.start.localDate} at {eventObject.dates.start.localTime}</p>
                                    <p><span>where:</span> {eventObject._embedded.venues[0].name}</p>
                                <div className='cardFlex'>
                                    <a 
                                    href={eventObject.url} target="_blank">buy tickets</a>
                                        <Link to={`/tmform/${eventObject.id}`}>
                                            <button className='eventButton'>
                                                Create event
                                            </button>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )

};

export default TicketMaster;