import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Pay from "./Flights/Pay";
import "./Bookform.css";

export const BookForm = () => {
  const [showPayment, setShowPayment] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

          alert("Booking request placed! We will contact you shortly.");
          // Show the payment form after successful submission
          setShowPayment(true);
       
    e.target.reset();
  };

  return (
    <>
      {showPayment ? (
        <Pay amount={4999} />
      ) : (
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="inputbox">
            <h3>Your Name*</h3>
            <input type="text" placeholder="Name" required name="name" />
          </div>
          <div className="inputbox">
            <h3>Email Address*</h3>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              name="email"
            />
          </div>
          <div className="inputbox">
            <h3>Contact Number*</h3>
            <input
              type="tel"
              placeholder="Number"
              required
              maxLength="10"
              pattern="[0-9]{10}"
              name="contact"
            />
          </div>
          <div className="inputbox">
            <h3>Enter the number of people</h3>
            <input
              type="number"
              min="1"
              max="15"
              placeholder="number"
              required
              name="people"
            />
          </div>
          <div className="inputbox">
            <h3>Arrival</h3>
            <input type="date" id="cap" required name="arrival" />
          </div>
          <div className="inputbox">
            <h3>Departure</h3>
            <input type="date" id="cap" required name="dept" />
          </div>
          <div className="sub-btn">
            <button type="submit" className="subbtn">
              Book now
            </button>
          </div>
        </form>
      )}
    </>
  );
};
