import React from "react";
// import vectorContact from "../assets/img/Vector Contact.svg";
import FormContact from "../components/FormContact";
import Header from '../components/Header'
import Footer from "../layout/Footer"

const Contact = () => {
  return (
    <div className="Container-contact" id="contact">
     <Header />

      <FormContact />

      <Footer />
    </div>
  );
};

export default Contact;
