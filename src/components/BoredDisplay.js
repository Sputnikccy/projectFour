
const BoredDisplay = (props) => {

    return(
         
        <div>

      
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