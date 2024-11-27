import React, { useState } from "react";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";


function CheckoutPage() {
  const [area, setArea] = useState("");
  const [customArea, setCustomArea] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [cardType, setCardType] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Data to be passed to PlaceOrderPage
    const orderData = {
      email,
      address,
      area,
      paymentMethod,
      cardType,
      cardNumber,
      cvv,
      nameOnCard,
    };

    // Navigate to PlaceOrderPage with data in the state
    navigate("/place-order", { state: orderData });
  };

  const lahoreAreas = [
    "Anarkali",
    "Gulshan Ravi",
    "Androon Lahore",
    "DHA",
    "Johar Town",
    "Model Town",
    "Cantt",
    "Bahria Town",
  ];

  const handleCardSelection = (type) => {
    setCardType(type);
  };

  const cardPlaceholders = {
    Visa: "4111 1111 1111 1111",
    MasterCard: "5555 5555 5555 4444",
    Amex: "3782 822463 10005",
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #fea116, #f6d365)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2 className="title" style={{ textAlign: "center" }}>
          Checkout Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="1234 Main Street"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="area">Area</label>
            {!customArea ? (
              <select
                id="area"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setCustomArea(e.target.value === "Other");
                }}
                required
              >
                <option value="">Select an Area...</option>
                {lahoreAreas.map((areaOption, index) => (
                  <option key={index} value={areaOption}>
                    {areaOption}
                  </option>
                ))}
                <option value="Other">Other (Type your area)</option>
              </select>
            ) : (
              <input
                type="text"
                id="custom-area"
                placeholder="Enter your area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            )}
          </div>

          <h3 className="title">Payment</h3>
          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash Payment
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Card Payment
              </label>
            </div>
          </div>

          {paymentMethod === "Card" && (
            <>
              <h4 className="title">Select Card Type</h4>
              <div className="card-icons">
                <i
                  className={`fa-brands fa-cc-visa card-icon ${cardType === "Visa" ? "active" : ""}`}
                  onClick={() => handleCardSelection("Visa")}
                ></i>
                <i
                  className={`fa-brands fa-cc-mastercard card-icon ${cardType === "MasterCard" ? "active" : ""}`}
                  onClick={() => handleCardSelection("MasterCard")}
                ></i>
                <i
                  className={`fa-brands fa-cc-amex card-icon ${cardType === "Amex" ? "active" : ""}`}
                  onClick={() => handleCardSelection("Amex")}
                ></i>
              </div>
              <div className="form-group">
                <label htmlFor="card-name">Name on Card</label>
                <input
                  type="text"
                  id="card-name"
                  placeholder="Cardholder Name"
                  required
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder={cardPlaceholders[cardType] || "Card Number"}
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cvv">Security Code (CVV)</label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    required
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

        <Link to = "/placeorder">
        <button type="submit" className="btn order_now py-2 px-4">
            Place Order
          </button>
        </Link>
         
         
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
