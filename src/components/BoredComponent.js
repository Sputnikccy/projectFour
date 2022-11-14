import { Link } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react'
import renderImage from '../Assets/lion.jpg'

const BoredComponent = () => {


    const getActivity = (e) => {
        e.preventDefault()
        const options = {
            url: `http://www.boredapi.com/api/activity?type=${userChoice}`,
            method: 'GET',
            dataResponse: 'json'
        };
        axios.request(options)
            .then((response) => {
                console.log(response.data)
                setActivities(response.data);
                getPicture(response.data.activity)
            })
            // getPicture()
            console.log("this is the activities; ",activities.activity)
            
    }

    const getPicture = (info) => {
        axios({
            url: 'https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'xMApnHMvGsHXF8WNkU53mf3KirR2oQ8ZS6YYr-M-NAU',
                query: info,
                per_page: 1
            }
        }).then((response) =>{
            console.log(response)
            // setActivityImage(response.data.results[0])
            const apiImage = response.data.results[0].urls.thumb;
            setActivityImage(apiImage)
        })
    }
    




    //track data from API
    const [activities, setActivities] = useState("");
    //track data of user’s choice of event type
    const [userChoice, setUserChoice] = useState("")
    
    const [activityImage, setActivityImage] = useState({})

    const placeHolderImage = renderImage

    
    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }
    

   
    
    return (
        <>
            <h3>Testing</h3>
            <form action="submit" onSubmit={getActivity}>
                {/* sr-only not working here, need to be figured out later */}
                <select
                    id='choice'
                    onChange={handleUserChoice}
                    value={userChoice}
                >
                    <option value="title" selected>Select Type</option>
                    <option value="education">education</option>
                    <option value="recreational">recreational</option>
                    <option value="social">social</option>
                    <option value="diy">diy</option>
                    <option value="charity">charity</option>
                </select>
                {/* sr-only not working here, need to be figured out later */}
                

                <button >Click for activities</button>
            </form>

            <div>
                {activityImage?
                // <img src={placeHolderImage}/>
                <img src={activityImage}  />
                :
                "no picture"}
                
                
                    
                    <h3>{activities.activity}</h3>
                    <h4>{activities.type}</h4>
                    <h5>{activities.participants}</h5>
                    <Link to={`/boredForm/${activities.key}`}>
                        <button>Create event</button>
                    </Link>
                
            </div>
        </>
    );

}

export default BoredComponent