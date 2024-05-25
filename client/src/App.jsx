import './App.css'
import Review from './Review.jsx'
import NavBar from './NavBar.jsx'
import Tipping from './Tipping.jsx'
import Feedback from './Feedback.jsx'

function App() {
  
  return (
    <div className='body'>
      <NavBar />
      <Tipping />
      <Review />
      <Feedback />
    </div>
  )
}

export default App
