import { Link } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react'

const BoredComponent = () => {

    useEffect((i) => {
        let tempArray = []

        for (i = 0; i <= 10; i++){
            axios({
                url: `http://www.boredapi.com/api/activity`,
                method: 'GET',
                dataResponse: 'json'
    
            })
        
            .then((response) => {
                //checks array to see if there is already an activity
                if (!tempArray.includes(response.data) && ){
                    //pushes if there isnt
                    tempArray.push(response.data)
                }  
                //.then once the 10 api calls are finished to set activities 
            }).then (()=>{
                setActivities(tempArray)
                console.log("temp",tempArray)
        })}
    }, [])
    


    const [activities, setActivities] = useState([]);
    console.log("activity", activities)


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