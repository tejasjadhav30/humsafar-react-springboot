import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pay from "./Pay";
import RegistrationForm from "../firebase";

const Bookinghotel = () => {
  const { id: flightId } = useParams();

  const [flightDetails, setFlightDetails] = useState(null);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    // Fetch flight details based on flightId
    const fetchFlightDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8081/service2/hotels/${flightId}`);
        const data = await response.json();
        setFlightDetails(data);
      } catch (error) {
        console.error("Error fetching flight details:", error);
      }
    };

    fetchFlightDetails();
  }, [flightId]);

  const handleSendVerificationCode = async () => {
    // Implement logic to send a verification code to the entered email
    // You can use an API endpoint or a service for this purpose
    // For simplicity, let's assume the verification code is sent successfully
    alert("Verification code sent successfully");
    setIsVerified(true);
  };

  const handleConfirmVerification = () => {
    // Implement logic to confirm the entered verification code
    // For simplicity, let's assume the verification code is correct
    setIsVerified(true);
  };

  const handlePayment = async () => {
    // Implement logic to process payment
    // For simplicity, let's assume the payment is successful
    setPaymentStatus("success");
  };

  const bookingStyles = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    background: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyles = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px",
    textAlign: "center",
    borderRadius: "10px 10px 0 0",
  };

  const sectionStyles = {
    padding: "20px",
  };

  const receiptStyles = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "0 0 10px 10px",
  };

  return (
    <div style={bookingStyles}>
      <div style={headerStyles}>
        <h2>Booking Details</h2>
      </div>
      <div style={sectionStyles}>
        <h3>Flight Details</h3>
        {flightDetails && (
          <div>
            <br></br>
            <p>hotelName: {flightDetails.hotelName}</p>
            <br></br>
            <p>location : {flightDetails.location}</p>
            <br></br>
            <p>Number of Rooms : {flightDetails.numberOfRooms}</p>
            <br></br>
            
            <p>Price per Night: {flightDetails.pricePerNight}</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        )}

        {!isVerified && (
          <div>
            <h3>Enter Your Email</h3>
            <br></br>
            {/* <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
            /> */}
            <RegistrationForm></RegistrationForm>
            <button
              onClick={handleSendVerificationCode}
              style={{
                padding: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send Verification Code
            </button>
          </div>
        )}

        {isVerified && (
          <div>
            <h3>Confirm Verification Code</h3>
            <input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
            />
            <button
              onClick={handleConfirmVerification}
              style={{
                padding: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Verification
            </button>
          </div>
        )}

        {isVerified && paymentStatus !== "success" && (
          <div>
            <br></br>
            <Pay amount={flightDetails.pricePerNight} />

            <h3>Payment</h3>
            <button
              onClick={handlePayment}
              style={{
                padding: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Complete Payment
            </button>
          </div>
        )}

        {paymentStatus === "success" && (
          <div style={receiptStyles}>
            <h3>Payment Successful</h3>
            <p>Thank you for your payment!</p>
            <h4>Flight Receipt</h4>

            {flightDetails && (
              <div>
                <p>Flight Number: {flightDetails.flightNumber}</p>
                <p>Departure Location: {flightDetails.departureLocation}</p>
                <p>Arrival Location: {flightDetails.arrivalLocation}</p>
                {/* Add other flight details here */}
              </div>
            )}

            <p>Email: {email}</p>
            <p>Amount: Rs {flightDetails ? flightDetails.price : "N/A"}</p>
            <p>Ticket booked by: abc website</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookinghotel;
