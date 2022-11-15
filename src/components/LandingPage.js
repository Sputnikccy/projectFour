import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='landing-container '>
             <h1>Flock of friends!</h1>

            <div className='subtitle'>
                <p>Trouble wrangling your friends to get together to do an activity?</p>
                <p>Have no idea what to do on weekends?</p>
                <p>Check out hundreds of ways to have fun with friends! </p>
            </div>

            <div className='linkContainer'>
                <Link to="/ticketMaster" >
                   <button> have fun with 💰</button>
                </Link>

                <Link to="/boredComponent" >
                   <button>  have fun for  🆓</button>
                </Link>
                
            </div>

        </div>
    )
}

export default LandingPage;