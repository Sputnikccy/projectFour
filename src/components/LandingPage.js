import { Link } from 'react-router-dom'


const LandingPage = () =>{
    return(
       <div className='landing-container'>
            <form action="">
                <label>Are you willing to spend money?</label>

                <div className='button-container'>
                    <Link to="/ticketmaster">
                        <button>Yes</button>
                    </Link>
                    
                    <Link to="/boredComponent">
                        <button>No</button>
                    </Link>
                </div>
            </form>     
       </div>
    )
}

export default LandingPage;