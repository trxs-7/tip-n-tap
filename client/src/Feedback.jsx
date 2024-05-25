import './Feedback.css'

function Feedback() {
    return (
        <div className="feedbackSection">
            <h1>WE LISTEN</h1>
            <p>Help Us Brake the Issue</p>
            <textarea className="feedbackBox" placeholder="Type in your issue..."/>
            <div>
                
                <a href="http://localhost:3000/auth/google"><button className="submit">Submit</button></a>
            </div>
        </div>
    )
}

export default Feedback