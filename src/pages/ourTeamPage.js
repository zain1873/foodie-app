import React from 'react'
import Layout from '../components/layouts/layout';


// Import images

import team1 from "../assets/img/team-1.jpg"
import team2 from "../assets/img/team-2.jpg"
import team3 from "../assets/img/team-3.jpg"
import team4 from "../assets/img/team-4.jpg"

function ourTeamPage() {
  return (
    <div>
      <Layout>
      <div className="container-fluid p-0">
      <div>
      <div className="hero-banner ">
        <div className="row align-items-center p-5">
          <div className="col-lg-12">
            <div className="banner-text">
              <h1 className='text-white text-center'>Our Team</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    {/* custom teams */}

    <section className='team_section'>
    <div className="container">
    <div className="col-lg-12">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
        <h1 className='text-center'>Our Master Chefs</h1>
      </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team1} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team2}
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team3} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team4} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team1} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team2}
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team3} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
        <div className="team_card text-center mt-5">
          <img 
            src={team4} 
            alt="Team Member" 
            className="team-image rounded-circle mb-3 obj_fit" 
          />
          <h6 className="team-name">John Doe</h6>
          <p className="team-position">Head Chef</p>
        </div>
      </div>
    </div>
  </div>
    </section>

    </Layout>
    </div>
  )
}

export default ourTeamPage