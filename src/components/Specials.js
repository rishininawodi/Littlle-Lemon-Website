import React from 'react';
import './styles.css';

function Specials() {
  // Dummy data for specials
  const specials = [
    { name: "Special 1", description: "Description 1" },
    { name: "Special 2", description: "Description 2" },
    { name: "Special 3", description: "Description 3" }
  ];

  return (
    <div className="specials">
      <h2>Specials</h2>
      {specials.map((special, index) => (
        <div key={index} className="special">
          <h3>{special.name}</h3>
          <p>{special.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Specials;
