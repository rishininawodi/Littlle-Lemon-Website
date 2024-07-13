// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
