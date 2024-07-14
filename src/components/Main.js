import React from 'react';
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
const Main = () => {
  // Reducer function to handle availableTimes state
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Placeholder logic for updating times based on selected date
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      default:
        return state;
    }
  };

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response) {
      navigate('/confirmation');
    } else {
      // Handle the error case as needed
      console.error('Booking submission failed');
    }
  };

  // Initial state for availableTimes
  const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  return (
    <div>
      {/* Other components and content */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default Main;