import './Tipping.css'
import { useState } from 'react'
// import TipButton from './TipButton'
function Tipping() {
    const [amount, setAmount] = useState(null)
    const handleClick = (tip) =>{
             setAmount(tip);
             console.log(amount)
    };
    return (
        <div className="tippingSection">
            <h1 className="title">APPRECIATE YOUR DRIVER</h1>
            <p className="description">Show your appreciation with a tip!</p>
            <section className="buttonSection">
                <button className='tipButton' onClick={() => handleClick(0.1)} style={{ color: amount === 0.1 ? 'green' : 'orange', border: `2px solid ${amount === 0.1 ? 'green' : 'orange'}`}}>10¢</button>
                <button className='tipButton' onClick={() => handleClick(0.5)} style={{ color: amount === 0.5 ? 'green' : 'orange', border: `2px solid ${amount === 0.5 ? 'green' : 'orange'}`}}>50¢</button>
                <button className='tipButton' onClick={() => handleClick(0.2)} style={{ color: amount === 0.2 ? 'green' : 'orange', border: `2px solid ${amount === 0.2 ? 'green' : 'orange'}`}}>20¢</button>
                <button className='tipButton' onClick={() => handleClick(1)} style={{ color: amount === 1 ? 'green' : 'orange', border: `2px solid ${amount === 1 ? 'green' : 'orange'}`}}>$1</button>
            </section>
        </div>
    )
}

export default Tipping