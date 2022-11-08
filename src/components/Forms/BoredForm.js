import './BoredForm.scss';

const BoredForm = () => {
    return(
        <div className="eventFormContainer">
            <form className='createEvent'>
                <label>Event name</label>
                <input 
                type="text"
                required 
                />
                <label>Host name</label>
                <input 
                type="text"
                required 
                />
                <label>Start time</label>
                <input 
                type="text"
                required 
                />
                <label>Location</label>
                <input 
                type="text"
                required 
                />
                <label>Enter Emails</label>
                <input 
                type="text"
                required 
                />
                <label>Description of event</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                required>
                Enter your event description here.
                </textarea>
            </form>
        </div>
    )
}

export default BoredForm