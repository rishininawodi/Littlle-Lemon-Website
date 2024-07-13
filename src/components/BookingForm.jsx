import React, { useState } from 'react';
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const BookingForm = ({ availableTimes, dispatch }) => {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1); // Default to 1 guest
  const [occasion, setOccasion] = useState('Birthday'); // Default occasion

  // Array of available times (could be fetched from API in real scenario)
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit form data or handle it as needed
    console.log('Form submitted:', { date, time, guests, occasion });
    // Reset form fields after submission (if needed)
    // setDate('');
    // setTime('');
    // setGuests(1);
    // setOccasion('Birthday');
    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        // Dispatch action to update availableTimes based on selectedDate
        dispatch({ type: 'UPDATE_TIMES', selectedDate });
      };
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
