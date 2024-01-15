import './App.css'

import cardFrontImage from './assets/images/bg-card-front.png'
import cardBackImage from './assets/images/bg-card-back.png'
import cardLogo from './assets/images/card-logo.svg'
import completeIcon from './assets/images/icon-complete.svg'

export default function App() {

  /*
    0000 0000 0000 0000
    Jane Appleseed
    00/00

    000

    Cardholder Name
    e.g. Jane Appleseed

    Card Number
    e.g. 1234 5678 9123 0000

    Exp. Date (MM/YY)
    MM
    YY

    CVC
    e.g. 123

    Confirm

    <!-- Completed state start -->

    Thank you!
    We've added your card details
    Continue
  */ 


  return (
    <div className="site-container">
      <div className="site-left">
        <div className="card-front-image">
          <img src={cardFrontImage} alt="Card's front image" />
          <div className="card-logo-image">
            <img src={cardLogo} alt="Card's logo image" />
          </div>
          <p className="card-number">XXXX XXXX XXXX XXXX</p>
          <div className="card-details">
            <p className="card-holder-name">John Doe</p>
            <p className="card-expiry-date">05/25</p>
          </div>
        </div>
        <div className="card-back-image">
          <img src={cardBackImage} alt="Card's back image" />
          <p className="card-cvv">XXX</p>
        </div>
      </div>
      <div className="site-right">
        <form action="#">
          <div className="form-piece">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <br />
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-piece">
            <label htmlFor="number">CARD NUMBER</label>
            <br />
            <input type="text" id="number" name="number" />
          </div>
        </form>
      </div>
    </div>
  );
}