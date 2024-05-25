import './Feedback.css'

function Feedback() {
    return (
        <div className="feedbackSection">
            <h1>WE LISTEN</h1>
            <p>Help Us Brake the Issue</p>
            <textarea className="feedbackBox" placeholder="Type in your issue..."/>
            <div>
                <button className="submit">Submit</button>
            </div>
            
        </div>
    )
}

export default Feedback