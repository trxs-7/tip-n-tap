import './Review.css'
import StarRating from './StarRating.jsx'

function Review() {
    return (
        <div className="reviewSection">
            <h1>RATE YOUR RIDE</h1>
            <p>Your feedback drives us forward!</p>
            <StarRating />
        </div>
    )
}

export default Review