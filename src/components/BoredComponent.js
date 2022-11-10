import { Link } from "react-router-dom";

const BoredComponent = () => {
    return (
        <>
        <h3>Testing</h3>

        <Link to="/boredForm">
        <button>press me to go to the form</button>
        </Link>  
        </>
    )
}

export default BoredComponent;