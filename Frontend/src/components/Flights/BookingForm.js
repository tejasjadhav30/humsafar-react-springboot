import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';

const BookForm = ({ type }) => {


  const [selectedFlight, setSelectedFlight] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showResults, setShowResults] = useState(false);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/service3/busbookings");
        const data = await response.json();
        setFlightsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const filterFlights = () => {
    // Filter flights based on selected criteria
    const filteredFlights = flightsData.filter(flight => 
      flight.departureLocation === fromLocation &&
      flight.arrivalLocation === toLocation &&
      new Date(flight.date).toDateString() === startDate.toDateString()
    );
    return filteredFlights;
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
            <h4>Check availability for {type === "flight" ? "flights" : "buses"}:</h4>
            <form id="form-submit" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="from">From:</label>
                    <select
                      required
                      name="from"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                    >
                      <option value="">Select a location...</option>
                      {[...new Set(flightsData.map(flight => flight.departureLocation))].map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="to">To:</label>
                    <select
                      required
                      name="to"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                    >
                      <option value="">Select a location...</option>
                      {[...new Set(flightsData.map(flight => flight.arrivalLocation))].map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="departure">Departure date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className="form-control date"
                    />
                  </fieldset>
                </div>
                {/* <div className="col-md-6">
                  <fieldset>
                    <label htmlFor="return">Return date:</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={startDate}
                      className="form-control date"
                    />
                  </fieldset>
                </div> */}
                <div className="col-md-6">
                  <div className="radio-select">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <label htmlFor="round">Round</label>
                        <input
                          type="radio"
                          name="trip"
                          id="round"
                          value="round"
                          required="required"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <label htmlFor="oneway">Oneway</label>
                        <input
                          type="radio"
                          name="trip"
                          id="oneway"
                          value="one-way"
                          required="required"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
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
          <h2>Available {type === "flight" ? "Flights" : "Buses"}</h2>
          <div className="result-list">
            {filterFlights().map((item, index) => (
              <div key={index} className="result-item">
                {/* Display flight details */}
                <p>Flight Number: {item.flightNumber}</p>
                <p>Departure Location: {item.departureLocation}</p>
                <p>Arrival Location: {item.arrivalLocation}</p>
                <p>Price: Rs {item.price}</p>
                <p>Total Flight Time: {item.totalFlightTime} minutes</p>
                <p>Date: {new Date(item.date).toLocaleString()}</p>

                {/* Add Link for redirection to booking page */}
                <Link to={`/booking/busbookings/${item.id}`}>
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

export default BookForm;      