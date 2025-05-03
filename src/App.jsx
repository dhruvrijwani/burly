import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [order, setOrder] = useState([]);

  const orderOptions = [
    'Cuba',
    'Afimi',
    'Velvet',
    'Petals Of Love',
    'Aura',
    'Black Smoke',
    'Mystic Twilight',
    'Flow',
    'H20',
    'La Flor',
    'Sandalwood',
    'Dark Passion',
    'Signature Gift Set',
    'Golden Nights'
  ];

  const handleConfirm = () => {
    const message = `Hi ${name}, thank you for purchasing from *Burly* at the Weekend Bazaar!


We’re excited to have you with us and hope you loved your purchase.
Your order: *${order.join(', ')}*

We handpick every product to bring you unique finds and great deals every weekend!

Check out more on our website: https://burlyindia.com/  
Follow us on Instagram for the latest arrivals and updates: https://www.instagram.com/burlyindia/

Thanks for being part of the Burly family!  
– Team Burly;`




    const whatsappURL = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="app-container">
      {step === 0 && (
        <div className="home-page">
          <img
            src="public/IMG_8457.PNG"
            alt="Brand Logo"
            className="brand-logo"
            onClick={() => setStep(1)}
          />
        </div>
      )}

      {step === 1 && (
        <div className="form-step">
          <h2>Enter Your Details</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={() => setStep(2)} disabled={!name || !number}>
            Proceed
          </button>
        </div>
      )}

{step === 2 && (
  <div className="form-step">
    <h2>Select Your Order</h2>
    <div className="checkbox-group">
      {orderOptions.map((orderOptions, idx) => (
        <label key={idx} className="checkbox-option">
          <input
            type="checkbox"
            value={orderOptions}
            checked={order.includes(orderOptions)}
            onChange={(e) => {
              if (e.target.checked) {
                setOrder([...order, orderOptions]);
              } else {
                setOrder(order.filter(item => item !== orderOptions));
              }
            }}
          />
          {orderOptions}
        </label>
      ))}
    </div>
    <button onClick={() => setStep(3)} disabled={order.length === 0}>
      Next
    </button>
  </div>
)}

      {step === 3 && (
        <div className="form-step">
          <h2>Confirm Your Order</h2>
          <p><strong>Message Preview:</strong></p>
          <pre className="preview">
Hi ${name}, thank you for purchasing from *Burly* at the Weekend Bazaar!

We’re excited to have you with us and hope you loved your purchase.
Your order: *${order.join(', ')}*

We handpick every product to bring you unique finds and great deals every weekend!

Check out more on our website: https://burlyindia.com/  
Follow us on Instagram for the latest arrivals and updates: https://www.instagram.com/burlyindia/

Thanks for being part of the Burly family!  
– Team Burly;
          </pre>
          <button onClick={handleConfirm}>Confirm Order Details</button>
        </div>
      )}
    </div>
  );
}

export default App;
