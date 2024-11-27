import React, { useState } from 'react';
import "../styles/form.css"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form Submitted:', formData);
    } else {
      console.error('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3" data-aos="fade-up">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="message"
              placeholder="Leave a message here"
              style={{ height: '150px' }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn order_now py-2 px-4" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>

    
  );
}

export default ContactForm;
