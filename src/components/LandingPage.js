import { Link } from 'react-router-dom'


const LandingPage = () =>{
    return(
       <>
       <form action="">
        <label>Are you willing to spend money?</label>
        <Link to="/testComponent">
            <button>Yes</button>
        </Link>
        <Link to="/testComponent">
            <button>No</button>
        </Link>
       </form>
       
       </>
    )
}

export default LandingPage;