import React from 'react'
import Layout from '../components/layouts/layout';
import ContactForm from '../components/contactForm';
import Testimonial from '../components/testimonials';


function contactPage() {
  return (
    <div>
      <Layout>
      <div className="container-fluid p-0">
        <div>
        <div className="hero-banner">
          <div className="row align-items-center p-5">
            <div className="col-lg-12">
              <div className="banner-text">
                <h1 className='text-white text-center'>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>


      <section className='contact-section'>
        <div className="container">
        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Contact us</h5>
      
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ContactForm/>
          </div>
        </div>
        </div>
      </section>

        <section className='testimonials-section'>
          <Testimonial/>
        </section>

      </Layout>
      
    </div>
  )
}

export default contactPage
