import Form from "../components/Form";
import contactbg from "../media/contactus.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2>
          Contact us for ticket bookings
          <hr />
        </h2>
        <section className="how" id="how">
          <div className="contbox"></div>
        </section>
        <div className="row">
          <div className="img">
            <img src={contactbg} id="contactimg" alt={""} />
          </div>
          <Form />
        </div>
      </section>
      <hr id="line" />

      <div className="callbox">
        <i className="fas fa-phone"></i> +91-7972038728
      </div>
      <div className="callbox">
        <i className="fas fa-briefcase"></i> 7613876446
      </div>
      <div className="callbox">
        <i className="fas fa-envelope"></i> HumSafar@gmail.com
      </div>
    </>
  );
};
