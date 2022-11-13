import { Link } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react'

const BoredComponent = () => {

    // function loadActivity() {
    //     setIsLoading(true);
    //     fetch("https://www.boredapi.com/api/activity")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setIsLoading(false)
    //         });
    // }
    useEffect((i) => {
        let tempArray = []

        for (i = 0; i <= 5; i++){
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
    // const [userChoice, setUserChoice] = useState('')
    // const [participants, setParticipants] = useState("");
    console.log(activities)

    // const handleUserChoice = (e) => {
    //     setUserChoice(e.target.value);
    // }

    // const handleParticipants = (e) => {
    //     setParticipants(e.target.value);
    // }
    // useEffect(() => {
    //     loadActivity();
    // }, []);

    // if (activities.length === 0) {
    //     return <p>Loading...</p>
    // }

    return (
        <div>
            {/* <select
                onChange={handleUserChoice}
                value={userChoice} >
                <option value="education">education</option>
                <option value="recreational">recreational</option>
                <option value="social">social</option>
                <option value="diy">diy</option>
                <option value="charity">charity</option>
            </select> */}
            
            <div>
            {
                activities.map((choice) => {
                    return (
                        <li id={choice.id} key={choice.key}>
                            <h3>{choice.activity}</h3>
                            {/* <Link to={`/boredForm/${choice.key}`}>
                                <button>Create event</button>
                            </Link> */}
                        </li>
                        
                    )
                })
            }



                {/* <h3>{activities.activity}</h3>
                <h4>{activities.type}</h4>
                <h5>{activities.participants}</h5> */}

                <Link to={`/boredForm/${activities.key}`}>
                    <button>Create event</button>
                </Link>
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <select
    //             onChange={(e) => handleUserChoice(e)}
    //             value={userChoice} >
    //                 <option value="education">education</option>
    //                 <option value="recreational">recreational</option>
    //                 <option value="social">social</option>
    //                 <option value="diy">diy</option>
    //                 <option value="charity">charity</option>
    //                 <option value="cooking">cooking</option>
    //                 <option value="relaxation">relaxation</option>
    //                 <option value="music">music</option>
    //                 <option value="busywork">busywork</option>
    //         </select>
    //         <button onClick={getActivity}>Click for activities</button>
    //         <h3>{activities.activity}</h3>
    //         <h4>{activities.type}</h4>
    //         <h5>{activities.participants}</h5>
    //     </div>
    // );




}


export default BoredComponent

        
       
 
