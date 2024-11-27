import React from "react";
import { useLocation } from "react-router-dom";  // Use useLocation to get passed data

function PlaceOrderPage() {
  const location = useLocation();  // Access location hook
  const {
    email,
    address,
    area,
    paymentMethod,
    cardType,
    cardNumber,
    cvv,
    nameOnCard,
  } = location.state || {};  // Get passed data from the checkout page

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
          Order Placed
        </h2>

        <div className="order-summary">
          <h3>Order Details:</h3>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Area: {area}</p>
          <p>Payment Method: {paymentMethod}</p>
          {paymentMethod === "Card" && (
            <>
              <p>Card Type: {cardType}</p>
              <p>Card Number: {cardNumber}</p>
              <p>CVV: {cvv}</p>
              <p>Name on Card: {nameOnCard}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderPage;
