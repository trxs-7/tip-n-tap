import './Tipping.css'

function Tipping() {
    return (
        <div className="tippingSection">
            <h1 className="title">APPRECIATE YOUR DRIVER</h1>
            <p className="description">Show your appreciation with a tip!</p>
            <section className="buttonSection">
                <button>10¢</button>
                <button>50¢</button>
                <button>20¢</button>
                <button>$1</button>
            </section>
        </div>
    )
}

export default Tipping