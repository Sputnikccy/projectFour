import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ticketmaster = () => {
    const [events, setEvents] = useState([]);
    const [categoryChoice, setCategoryChoice] = useState('');
    const [sortChoice, setSortChoice] = useState('');
    const [cityChoice, setCityChoice] = useState('');

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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">city</label>
                <input 
                type="text"
                id="city"
                value={cityChoice}
                onChange={handleThirdOnChange}
                 />
                <label htmlFor="category">category</label>
                <select 
                name="category" 
                id="category"
                value={categoryChoice}
                onChange={handleOnChange}
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
                id="sort"
                value={sortChoice}
                onChange={handleOthOnChange}
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