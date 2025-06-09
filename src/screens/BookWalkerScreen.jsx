import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from "react-native-web";
import "../App.css";
import './BookWalkerScreen.css';
import CustomIcon from "../components/CustomIcon.jsx";

const BookWalkerScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [error, setError] = useState('');

  const availableWalkers = [
    {
      id: 1,
      name: 'John Walker',
      rating: 4.8,
      reviews: 125,
      price: 25,
      availability: [
        { day: 'Monday', times: ['9:00', '11:00', '14:00'] },
        { day: 'Tuesday', times: ['10:00', '13:00', '16:00'] },
        { day: 'Wednesday', times: ['8:00', '12:00', '15:00'] },
      ]},
    {
      id: 2,
      name: 'Sarah Paws',
      rating: 4.9,
      reviews: 98,
      price: 28,
      availability: [
        { day: 'Tuesday', times: ['9:00', '12:00', '15:00'] },
        { day: 'Thursday', times: ['10:00', '14:00', '17:00'] },
        { day: 'Friday', times: ['8:00', '11:00', '14:00'] },
      ]},
  ];

  const durations = ['30 minutes', '45 minutes', '60 minutes'];

  const handleBook = async () => {
    if (!selectedDate || !selectedTime || !selectedDuration) {
      setError('Please select all booking details');
      return;
    }

    try {
      setError('');
      // In a real app, this would make an API call to book the walk
      alert('Booking successful!');
    } catch (err) {
      setError('Failed to book walk. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Book a Walker</div>
      </div>

      <div className="content">
        {error && (
          <div className="error">{error}</div>
        )}

        <div className="filter-container">
          <button className="filter-button">
            <CustomIcon name="filter" size={20} color="#666" />
            <span className="filter-text">Filter Walkers</span>
          </button>
        </div>

        <div className="walkers-container">
          {availableWalkers.map((walker) => (
            <div
              key={walker.id}
              className="walker-card"
              onClick={() => {
                // Navigate to walker details
              }}
            >
              <div className="walker-info">
                <div className="walker-name">{walker.name}</div>
                <div className="rating-container">
                  <CustomIcon name="star" size={16} color="#FFD700" />
                  <div className="walker-rating">{walker.rating} ⭐</div>
                  <div className="review-count">({walker.reviews})</div>
                </div>
                <div className="price-text">${walker.price}/hour</div>
              </div>

              <div className="availability-container">
                <div className="availability-title">Available Times</div>
                {walker.availability.map((day) => (
                  <div key={day.day} className="availability-row">
                    <div className="day-text">{day.day}</div>
                    {day.times.map((time) => (
                      <button
                        key={time}
                        className={`time-slot ${selectedTime === time ? 'time-slot-selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <div className="time-text">{time}</div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="duration-container">
                <div className="duration-title">Duration</div>
                {durations.map((duration) => (
                  <button
                    key={duration}
                    className={`duration-button ${selectedDuration === duration ? 'duration-button-selected' : ''}`}
                    onClick={() => setSelectedDuration(duration)}
                  >
                    <div className="duration-text">{duration}</div>
                  </button>
                ))}
              </div>

              <button
                className={`book-button ${!selectedTime || !selectedDuration ? 'book-button-disabled' : ''}`}
                onClick={handleBook}
                disabled={!selectedTime || !selectedDuration}
              >
                <div className="book-button-text">Book Now</div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookWalkerScreen;
