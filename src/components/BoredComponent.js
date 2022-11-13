import { Link } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react'

const BoredComponent = () => {

    useEffect((i) => {
        let tempArray = []

        for (i = 0; i <= 7; i++){
            axios({
                url: `http://www.boredapi.com/api/activity`,
                method: 'GET',
                dataResponse: 'json'
    
            })
        
            .then((response) => {
                tempArray.push(response.data)
                console.log(tempArray)
                setActivities(tempArray);
            })
        }
    }, [])
    


    const [activities, setActivities] = useState("");
    console.log(activities)



    if (activities.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
            {
                activities.map((choice) => {
                    return (
                        <li id={choice.id} key={choice.key}>
                            <h3>{choice.activity}</h3>
                            <Link to={`/boredForm/${choice.key}`}>
                                <button>Create event</button>
                            </Link>
                        </li>
                        
                    )
                })
            }
            </div>
        </div>
    );
}

export default BoredComponent

