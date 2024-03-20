import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Discover seamless booking and unmatched convenience with our curated selection of flights tailored to your preferences!",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "Unlock exclusive discounts and limited-time offers on flights, hotels, and experiences, ensuring you get the most value from your travels.",
      icon: "fas fa-rupee-sign",
    },
    
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: " Immerse yourself in local flavors with our recommendations, guiding you to the best culinary experiences at your travel destinations.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Find the perfect stay tailored to your preferences and budget, ensuring a comfortable and memorable experience during your travels.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Prioritize your safety with our service, offering essential travel information, destination-specific guidelines, and real-time updates for a worry-free journey.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
