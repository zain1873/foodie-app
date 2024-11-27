import React from 'react';
import Layout from '../components/layouts/layout';
import "../styles/home.css";
import heroImage from '../assets/img/hero.png';
import { Link } from 'react-router-dom';
import Services from '../components/services';
import AboutUs from '../components/about';
import Reservation from '../components/reservation';
import Testimonial from '../components/testimonials';
import Teams from '../components/teams';
import Menu from '../components/menu';



function Home() {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <div>
        <div className="home-banner">
          <div className="row align-items-center p-lg-5 p-3">
            <div className="col-lg-6 mb-4">
              <div className='p-lg-4 p-sm-3'  data-aos="fade-right">
              <h1 className="text-white">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p className="text-white mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link to="/booking" className="btn order_now py-sm-3 px-sm-5 me-3">
                Book A Table
              </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
            <div className='hero-img mx-auto'>
            <img className="img-fluid obj_fit" src={heroImage} alt="Hero" />
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Services/>
      <AboutUs/>
      <Menu/>
      <Teams/>
      <Reservation/>
      <Testimonial/>


    </Layout>
  
  );
}

export default Home;
