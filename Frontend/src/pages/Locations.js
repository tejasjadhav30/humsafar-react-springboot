import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    {
      place: "chennai",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "delhi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: goa,
      price: "6000-7000 INR",
    },
    {
      place: "goa",
      info: "Sun-kissed beaches, vibrant nightlife, and Portuguese charm define Goa, offering a perfect blend of relaxation and lively festivities.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "gujrat",
      info: "Tranquil backwaters, lush landscapes, and cultural allure characterize Kerala, inviting travelers to experience serenity and tradition.",
      img: rajasthan,
      price: "5000-6000 INR",
    },
    {
      place: "himachal",
      info: "Snow-capped peaks, lush valleys, and cultural richness make Himachal Pradesh a haven for adventure and exploration.",
      img: himachal,
      price: "7000-8000 INR",
    },
    {
      place: "jammu",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: goa,
      price: "10000-13000 INR",
    },
    {
      place: "karnataka",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: rajasthan,
      price: "6000-7000 INR",
    },
    {
      place: "uttarakhand",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: "https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1584012579_10_5.jpg.webp",
      price: "4000-5000 INR",
    },
    {
      place: "dubai",
      info: "Modern marvels and luxury blend seamlessly in Dubai, a city known for its iconic skyscrapers, extravagant attractions, and vibrant shopping scene.",
      img: dubai,
      price: "40000-50000 INR",
    },
    {
      place: "europe",
      info: "A continent of diverse cultures and rich history, Europe enchants with romantic cities, ancient ruins, charming landscapes, and a varied culinary scene, making it a dream destination for all types of travelers.",
      img: europe,
      price: "40000-50000 INR",
    },
    {
      place: "thailand",
      info: "Thailand, in Southeast Asia, offers a vibrant mix of stunning beaches, bustling street life, ornate temples, and delicious cuisine. It caters to both adventure seekers and those looking for a relaxing tropical getaway.",
      img: thailand,
      price: "50000-60000 INR",
    },
    {
      place: "maldives",
      info: "The Maldives, an Indian Ocean paradise, is synonymous with luxury, offering overwater bungalows, crystal-clear waters, and vibrant coral reefs. It's a haven for romance and relaxation.",
      img: maldives,
      price: "30000-40000 INR",
    },
    // {
    //   place: "Thailand",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: thailand,
    //   price: "4000-5000 INR",
    // },
    {
      place: "Maldives",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: maldives,
      price: "4000-5000 INR",
    },
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
