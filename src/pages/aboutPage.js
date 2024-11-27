import React from 'react'
import Layout from '../components/layouts/layout';
import "../styles/pages.css"
import Teams from '../components/teams';


// Import images
import about1 from '../assets/img/about-1.jpg';
import about2 from '../assets/img/about-2.jpg';
import about3 from '../assets/img/about-3.jpg';
import about4 from '../assets/img/about-4.jpg';

function aboutPage() {
  return (
    <div>
      <Layout>
      <div className="container-fluid p-0">
        <div>
        <div className="hero-banner">
          <div className="row align-items-center p-5">
            <div className="col-lg-12">
              <div className="banner-text">
                <h1 className='text-white text-center'>About Us</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    
    {/* About.js file i will not add about component bcz i will remove the button is aboutpage */}

    <section className='about-section'>
    <div className="container">
      <div className="row g-5 align-items-center">
        {/* Image Grid */}
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-start" data-aos="fade-up">
              <img
                className="img-fluid rounded w-100 "
                data-wow-delay="0.1s"
                src={about1}
                alt="About 1"
              />
            </div>
            <div className="col-6 text-start" data-aos="fade-up">
              <img
                className="img-fluid rounded w-75"
                data-wow-delay="0.3s"
                src={about2}
                alt="About 2"
                style={{ marginTop: '25%' }}
              />
            </div>
            <div className="col-6 text-end" data-aos="fade-up">
              <img
                className="img-fluid rounded w-75"
                data-wow-delay="0.5s"
                src={about3}
                alt="About 3"
              />
            </div>
            <div className="col-6 text-end" data-aos="fade-up">
              <img
                className="img-fluid rounded w-100"
                data-wow-delay="0.7s"
                src={about4}
                alt="About 4"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="col-lg-6" data-aos="fade-left">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
          <h1 className="mb-4">
            Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>

          {/* Experience and Chefs */}
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1 className="flex-shrink-0 display-5 text-primary mb-0">15</h1>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1 className="flex-shrink-0 display-5 text-primary mb-0">50</h1>
                <div className="ps-4">
                  <p className="mb-0">Popular</p>
                  <h6 className="text-uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

     <Teams/>

      </Layout>
    </div>
  )
}

export default aboutPage
