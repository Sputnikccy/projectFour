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
    // useEffect(() => {
    //     axios({
    //         url: 'http://www.boredapi.com/api/activity?type=${userChoice}',
    //         method: 'GET',
    //         dataResponse: 'json'

    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             setActivities(response.data);
    //         })
    // }, [])

    // &participants=3
    const getActivity = () => {
        const options = {
            url: `http://www.boredapi.com/api/activity?type=${userChoice}`,
            method: 'GET',
            dataResponse: 'json'
        };
        axios.request(options)
            .then((response) => {
                console.log(response.data)
                setActivities(response.data);
            })
    }



    const [activities, setActivities] = useState("");
    const [userChoice, setUserChoice] = useState('')
    // const [participants, setParticipants] = useState("");

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

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
            <select
                onChange={handleUserChoice}
                value={userChoice} >
                <option value="education">education</option>
                <option value="recreational">recreational</option>
                <option value="social">social</option>
                <option value="diy">diy</option>
                <option value="charity">charity</option>
            </select>
            {/* <select
                onChange={handleUserChoice}
                value={userChoice} >
                <option value="education">1</option>
                <option value="recreational">2</option>
                <option value="social">3</option>
                <option value="diy">4</option>
                <option value="charity">5</option>
            </select> */}
            <button onClick={getActivity}>Click for activities</button>
            <div>
                <h3>{activities.activity}</h3>
                <h4>{activities.type}</h4>
                <h5>{activities.participants}</h5>
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