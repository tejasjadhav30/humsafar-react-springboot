import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Flights.css';

const HotelForm = ({ type }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [showResults, setShowResults] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [hotelsData, setHotelsData] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/service2/hotels");
        const data = await response.json();
        setHotelsData(data);

        // Extract unique locations from the data
        const locations = [...new Set(data.map(hotel => hotel.location))];
        setAvailableLocations(locations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const filterHotels = () => {
    const filteredHotels = hotelsData.filter(hotel => 
      hotel.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      hotel.numberOfRooms > 0
    );
    return filteredHotels;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="col-md-5 col-md-offset-1">
      <section id="first-tab-group" className="tabgroup">
        <div id="tab1">
          <div className="submit-form">
            <h4>Check availability for Hotels:</h4>
            <form id="form-submit" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="location">Location:</label>
                    <select
                      name="location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    >
                      <option value="">Select a location...</option>
                      {availableLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="departure">Check-in date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className="form-control date"
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <button type="submit" id="form-submit" className="btn">Search</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results">
          <h2>Available {type === "flight" ? "Flights" : "Hotels"}</h2>
          <div className="result-list">
            {filterHotels().map((hotel, index) => (
              <div key={index} className="result-item">
                {/* Display hotel details */}
                <p>Hotel Name: {hotel.hotelName}</p>
                <p>Location: {hotel.location}</p>
                <p>Number of Rooms: {hotel.numberOfRooms}</p>
                <p>Price per Night: Rs {hotel.pricePerNight}</p>

                {/* Add Link for redirection to booking page */}
                <Link to={`/booking/hotels/${hotel.id}`}>
                  <button>Book</button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HotelForm;
