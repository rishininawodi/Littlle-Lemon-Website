import React from 'react';
import './styles.css';

function CustomersSay() {
  // Dummy data for testimonials
  const testimonials = [
    { name: "Customer 1", text: "Great food!", rating: 5 },
    { name: "Customer 2", text: "Excellent service!", rating: 4 },
    { name: "Customer 3", text: "Will come again!", rating: 5 }
  ];

  return (
    <div className="customers-say">
      <h2>What Our Customers Say</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.text}</p>
          <p>Rating: {testimonial.rating}</p>
          <p>- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomersSay;
