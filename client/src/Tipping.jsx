import './Tipping.css'
import { useState } from 'react'
// import TipButton from './TipButton'
function Tipping() {
    const [amount, setAmount] = useState(0)
    const handleClick = (tip) =>{
        return () => {
             setAmount(tip)
             console.log(amount)
        }
            
           
    }
    return (
        <div className="tippingSection">
            <h1 className="title">APPRECIATE YOUR DRIVER</h1>
            <p className="description">Show your appreciation with a tip!</p>
            <section className="buttonSection">
                <button className='tipButton' onClick={handleClick(0.1)}>10¢</button>
                <button className='tipButton' onClick={handleClick(0.5)}>50¢</button>
                <button className='tipButton' onClick={handleClick(0.2)}>20¢</button>
                <button className='tipButton' onClick={handleClick(1)}>$1</button>
            </section>
        </div>
    )
}

export default Tipping