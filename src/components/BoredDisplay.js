
const BoredDisplay = (props) => {
console.log(props)

    return(
         
        <div>

        {/* <h3>{props.activities.error}</h3>    */}
        <h3>{props.activities.activity}</h3>
        <h4>{props.activities.type}</h4>
        <h5>{props.activities.participants}</h5>
        <div className="imageContainer"></div>
        <button>more events</button>
        <button>create event</button>
    </div>
    )
}

export default BoredDisplay