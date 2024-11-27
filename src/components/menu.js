import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";


import pizza from "../assets/img/pizza.jpg";
import burger from "../assets/img/burger.jpg";
import pasta from "../assets/img/pasta.jpg";

const Menu = () => {
  return (
    <div className="container py-5">
      <h5 className="section-title ff-secondary text-center text-primary fw-normal mb-5">
        Our Menu
      </h5>
      <div className="row justify-content-center">
        {/* Pizza Card */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <div className="card menu-card">
            <img className="img-fluid rounded w-100" src={pizza} alt="Pizza" />
            <h2 className="mt-3">Pizzas</h2>
            <p>Delicious pizzas made fresh!</p>
            <Link
              to="/products/pizzas"
              className="stretched-link btn order_now py-sm-3 px-sm-5 me-3"
            >
              Explore Pizzas
            </Link>
          </div>
        </div>

        {/* Burger Card */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <div className="card menu-card">
            <img className="img-fluid rounded w-100" src={burger} alt="Burger" />
            <h2 className="mt-3">Burgers</h2>
            <p>Juicy burgers with all the fixings!</p>
            <Link
              to="/products/burgers"
              className="stretched-link btn order_now py-sm-3 px-sm-5 me-3"
            >
              Explore Burgers
            </Link>
          </div>
        </div>

        {/* Pasta Card */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <div className="card menu-card">
            <img className="img-fluid rounded w-100" src={pasta} alt="Pasta" />
            <h2 className="mt-3">Pastas</h2>
            <p>Scrumptious pastas cooked to perfection!</p>
            <Link
              to="/products/pastas"
              className="stretched-link btn order_now py-sm-3 px-sm-5 me-3"
            >
              Explore Pastas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
