import React from 'react';
import '../styles/service.css'; 

function Services() {
  return (
    <section className='services'>
    <div className="container">
      <div className="row g-4 " data-aos="fade-up">
        <div className="col-lg-3 col-sm-6">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
              <h5>Master Chefs</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
              <h5>Quality Food</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
              <h5>Online Order</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-headset text-primary mb-4"></i>
              <h5>24/7 Service</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;
