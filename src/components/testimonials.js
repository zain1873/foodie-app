import React from 'react';
import '../styles/testimonials.css';

function Testimonial() {
  const reviews = [
    {
      id: 1,
      name: 'jawad',
      position: 'Customer',
      review: 'The food was amazing! Will definitely visit again.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'zain',
      position: 'Food Critic',
      review: 'A wonderful dining experience with a warm ambiance.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Mark Wilson',
      position: 'Chef',
      review: 'Their menu is delightful, and the flavors are exquisite.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'johnny',
      position: 'review',
      review: 'Their menu is delightful, and the flavors are exquisite.',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <section className="testimonial-section">
      <div className='container'>
      <h5 class="section-title ff-secondary text-center text-primary fw-normal mb-5">What Our Customers Say</h5>
      <div className="testimonial-cards">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <img className="testimonial-image" src={review.image} alt={review.name} />
            <div className="testimonial-content">
              <h5 className="testimonial-name">{review.name}</h5>
              <p className="testimonial-position">{review.position}</p>
              <p className="testimonial-review">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Testimonial;
