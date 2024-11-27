import React from 'react'
import Layout from '../components/layouts/layout';

function servicePage() {
  return (
    <div>
    <Layout>
    <div className="container-fluid p-0">
      <div>
      <div className="hero-banner ">
        <div className="row align-items-center p-5">
          <div className="col-lg-12">
            <div className="banner-text">
              <h1 className='text-white text-center'>Services</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  
{/* custom services */}

<section className='services'>
    <div className="container">
    <h5 className="section-title ff-secondary text-center text-primary fw-normal ">Our Services</h5>

      <div className="row g-4 pt-4">
        
        <div className="col-lg-4 col-sm-6"  data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
              <h5>Quality Food</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
              <h5>Online Order</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-headset text-primary mb-4"></i>
              <h5>24/7 Service</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-headset text-primary mb-4"></i>
              <h5>24/7 Service</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
              <h5>Quality Food</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
          <div className="service-item pt-3">
            <div className="p-4 card_content">
              <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
              <h5>Online Order</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </Layout>
  </div>
  )
}

export default servicePage