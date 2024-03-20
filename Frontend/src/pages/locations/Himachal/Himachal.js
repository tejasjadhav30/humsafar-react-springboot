import './Himachal.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Himachal=()=>{
    const placeInfo = [
        {
          placeName: "Himachal",
          tagline: "The mountains are calling",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: HimachalImages.dp1,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp2,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp3,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp4,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
        <>
            <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                Nestled in the lap of the Himalayas, Himachal Pradesh is a picturesque state known for its scenic landscapes, snow-capped mountains, and vibrant culture. Shimla, the capital, and Manali are popular destinations, offering adventure activities like trekking and skiing. The region also boasts charming hill stations, lush valleys, and a rich cultural heritage, making it a haven for nature lovers and thrill-seekers alike.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">T</span>reks
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Trekking camps 
                  <hr />
                </h2>
                <p>
                1. Hampta Pass Trek:
Highlights: Scenic landscapes, lush valleys, and a dramatic change in scenery from Kullu to Spiti Valley.
Difficulty: Moderate
2. Roopkund Trek:
Highlights: The mysterious Roopkund Lake, surrounded by snow-capped peaks and meadows.
Difficulty: Moderate to Difficult
3. Pin Parvati Pass Trek:
Highlights: Challenging trek connecting Parvati Valley and Pin Valley, offering diverse landscapes.
Difficulty: Difficult
                  
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">N</span>ature
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Himachal
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            HumSafar
            </p>
            <p>
            HumSafar: Your all-in-one travel solution. Our packages include curated flights, exclusive deals, delectable local cuisines, comfortable hotel stays, and a knowledgeable guide, ensuring your journey is not just a trip but an immersive experience. Travel worry-free, dine authentically, rest comfortably, and explore with confidence - all with HumSafar.anditiis,
              magnam incidunt expedita recusandae exercitationem.
            </p>
            <p>
            Safety is our priority. With HumSafar, embark on your adventures worry-free. Our Safe Travel feature provides destination-specific guidelines, real-time updates, and essential information. Your well-being matters to us, and we're committed to ensuring a secure and enjoyable journey. Trust HumSafar for a safe and memorable travel experience.





            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}