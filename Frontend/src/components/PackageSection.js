import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "himachal",
      info: "Snow-capped peaks, lush valleys, and cultural richness make Himachal Pradesh a haven for adventure and exploration.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Sun-kissed beaches, vibrant nightlife, and Portuguese charm define Goa, offering a perfect blend of relaxation and lively festivities.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      info: "Tranquil backwaters, lush landscapes, and cultural allure characterize Kerala, inviting travelers to experience serenity and tradition.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "A land of royal heritage, Rajasthan boasts majestic palaces, vibrant cities, and the vast Thar Desert, capturing the essence of regal India.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info: "Modern marvels and luxury blend seamlessly in Dubai, a city known for its iconic skyscrapers, extravagant attractions, and vibrant shopping scene.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "europe",
      info:"A continent of diverse cultures and rich history, Europe enchants with romantic cities, ancient ruins, charming landscapes, and a varied culinary scene, making it a dream destination for all types of travelers.",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "thailand",
      info: "Thailand, in Southeast Asia, offers a vibrant mix of stunning beaches, bustling street life, ornate temples, and delicious cuisine. It caters to both adventure seekers and those looking for a relaxing tropical getaway.",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "maldives",
      info: "The Maldives, an Indian Ocean paradise, is synonymous with luxury, offering overwater bungalows, crystal-clear waters, and vibrant coral reefs. It's a haven for romance and relaxation.",
      img: maldives,
      price: "4000-5000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
