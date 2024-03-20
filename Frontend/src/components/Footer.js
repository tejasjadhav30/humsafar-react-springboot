import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
            HumSafar: Your seamless travel companion, offering the best flights, exclusive deals, local flavors, and safe stays for unforgettable journeys. Travel with confidence, adventure with HumSafar.





            </p>
          </div>
         
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">H</span>umSafar 2023-24 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
