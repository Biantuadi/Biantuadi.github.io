import React from "react";
import vectorContact from "../assets/img/Vector Contact.svg";
import Navigation from "../components/Navigation";



const Contact = () => {
  return (
    <div className="Container-contact" id="contact">

      <header>
        <Navigation  />
      </header>

    <img src={vectorContact} alt="vector-contact" className="vector-contact" />
    </div>
  );
};

export default Contact;
