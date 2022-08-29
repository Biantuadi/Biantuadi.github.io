import React from "react";
// import vectorContact from "../assets/img/Vector Contact.svg";
import FormContact from "../components/FormContact";
import Header from '../components/Header'

const Contact = () => {
  return (
    <div className="Container-contact" id="contact">
     <Header />

      <FormContact />
      {/* <img
        src={vectorContact}
        alt="vector-contact"
        className="vector-contact"
      /> */}
    </div>
  );
};

export default Contact;
