import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bgvideo from "../media/evening-bg.mp4";
import { Services } from "../components/Services";
import { BookSection } from "../components/BookSection";
import { PackageSection } from "../components/PackageSection";
import { ContInfo } from "../components/ContInfo";

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home" id="home">
          <div className="content">
            <h3>
              Begin your <span id="diff">A</span>dventures with us
            </h3>
            <p>Explore the world with us for the best travel experience</p>
            <div className="explore-buttons">
              {/* <Link className="btn" to="/locations">
                <button className="exp-btn">
                  <img src="location-icon.png" alt="Explore Locations" />
                  Explore
                </button>
              </Link> */}
              <Link className="btn" to="/flights">
                <button className="exp-btn">
                  <img src="https://cdn-icons-png.flaticon.com/512/3125/3125713.png" alt="Flights" />
                  Flights
                </button>
              </Link>
              <Link className="btn" to="/hotels">
                <button className="exp-btn">
                  <img src="https://cdn-icons-png.flaticon.com/512/235/235889.png" alt="Hotels" />
                  Hotels
                </button>
              </Link>
              <Link className="btn" to="/bus">
                <button className="exp-btn">
                  <img src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png" alt="Bus" />
                  Bus
                </button>
              </Link>
            </div>
          </div>

          <div className="video-container">
            <video src="https://media.istockphoto.com/id/1189586920/video/planet-earth-globe-zoom-in-universe-space-view.mp4?s=mp4-640x640-is&k=20&c=UH9CaYeSaVv2PzvwI5Y7bhU498_d3c2Wa3f3paQU9OE=" loop autoPlay muted></video>
          </div>

          <div className="info">
            <div className="mail">
              <i className="fas fa-envelope" id="ficons"></i>
              <p>
                <a href="mailto:info.trabebo@gmail.com">
                  HumSafar@gmail.com
                </a>
              </p>
            </div>
            <div className="socialm">
              <i className="fab fa-instagram" id="ficons"></i>
              <p>HumSafar</p>
            </div>
            <div className="call">
              <i className="fas fa-phone-alt" id="ficons"></i>
              <p>
                <a href="tel:7259987584">+91-7972038728</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <BookSection />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" />
    </>
  );
};
