import React from "react";
import "../styles/reservation.css"

const ReservationSection = () => {
  return (
    <section className="reservation">
      <div className="container-xxl py-5 px-0">
        <div className="row g-0">
          {/* Video Section */}
          <div className="col-md-6">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/1ZgZjkcq5Mc"  // Replace with your desired video URL
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>

          {/* Reservation Form Section */}
          <div className="col-md-6 bg-dark d-flex align-items-center form_section">
            <div className="p-lg-5 p-3" data-aos="fade-up">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3">
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="datetime"
                        placeholder="Select Date & Time"
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select" id="select1">
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                      </select>
                      <label htmlFor="select1">No Of People</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn order_now w-100 py-3" type="submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0">
              <iframe
                className="w-100"
                height="500"
                src=""
                id="video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
  