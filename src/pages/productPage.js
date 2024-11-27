import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Import images
// Existing imports (pasta1, pizza1, burger, etc.)
import pasta1 from "../assets/img/pasta1.jpg";
import pasta2 from "../assets/img/pasta2.jpg";
import pasta3 from "../assets/img/pasta3.jpg";
import pasta4 from "../assets/img/pasta4.jpg";
import pasta5 from "../assets/img/pasta2.jpg";

import pizza1 from "../assets/img/pizza1.jpg";
import pizza2 from "../assets/img/pizza2.jpg";
import pizza3 from "../assets/img/pizza3.jpg";
import pizza from "../assets/img/pizza.jpg";

import burger from "../assets/img/burger.jpg";
import burger1 from "../assets/img/burger1.jpg";
import burger2 from "../assets/img/burger2.jpg";


// Product data (unchanged)
const productData = {
  pizzas: [
    { id: 1, name: "Margherita", price: 8.99, image: pizza1 },
    { id: 2, name: "Pepperoni", price: 10.99, image: pizza2 },
    { id: 3, name: "Veggie Supreme", price: 9.99, image: pizza3 },
    { id: 4, name: "BBQ Chicken", price: 11.99, image: pizza },
    { id: 5, name: "Hawaiian", price: 10.49, image: pizza1 },
    { id: 6, name: "Four Cheese", price: 12.99, image: pizza2 },
  ],
  burgers: [
    { id: 1, name: "Classic Burger", price: 6.99, image: burger },
    { id: 2, name: "Cheeseburger", price: 7.99, image: burger1 },
    { id: 3, name: "Bacon Burger", price: 8.49, image: burger2 },
    { id: 4, name: "Veggie Burger", price: 7.49, image: burger },
    { id: 5, name: "Double Patty", price: 9.99, image: burger1 },
    { id: 6, name: "Chicken Burger", price: 7.99, image: burger2 },
  ],
  pastas: [
    { id: 1, name: "Spaghetti", price: 9.99, image: pasta1 },
    { id: 2, name: "Penne Alfredo", price: 11.99, image: pasta2 },
    { id: 3, name: "Fettuccine", price: 10.99, image: pasta3 },
    { id: 4, name: "Mac & Cheese", price: 8.99, image: pasta4 },
    { id: 5, name: "Carbonara", price: 12.49, image: pasta5 },
    { id: 6, name: "Baked Ziti", price: 10.49, image: pasta1 },
  ],
};

// Component
function ProductPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const products = productData[category];
  const [cart, setCart] = useState({});
  const [notification, setNotification] = useState("");

  if (!products) {
    return <h2>Category not found!</h2>;
  }

  const bannerText = {
    pizzas: "Explore Our Delicious Pizzas",
    burgers: "Taste Our Juicy Burgers",
    pastas: "Savor Our Scrumptious Pastas",
  };

  

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });

    setNotification(`"${product.name}" added to cart successfully!`);
    setTimeout(() => setNotification(""), 3000);
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId].quantity + 1,
      },
    }));
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };
  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } }); // Pass the cart data to the CheckoutPage
  };
  
  return (
    <div>
      {/* Notification */}
      {notification && (
        <div className="alert alert-success text-center">
          {notification}
        </div>
      )}

      {/* Hero Banner */}
      <div className="hero-banner bg-primary py-5 text-white text-center">
        <h1>{bannerText[category]}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mt-3">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white text-decoration-none">
                Home /
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white p-0"
              aria-current="page"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          </ol>
        </nav>
      </div>

      {/* Product List */}
      <div className="container py-5">
        <h1 className="section-title ff-secondary text-center text-primary fw-normal">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button
                    className="btn order_now py-3 px-5 mt-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="container py-5">
        <h2>Cart</h2>
        {Object.keys(cart).length > 0 ? (
          <div>
            {Object.values(cart).map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3">
                <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                <div className="ms-3">
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="ms-auto">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <Link to = "/checkout">
            <button
              className="btn btn-primary mt-3"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            </Link>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
