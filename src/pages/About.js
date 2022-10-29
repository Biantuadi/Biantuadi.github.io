import React from "react";
import Header from "../components/Header";
import Identyti from "../layout/about/Identyti";
import Formation from "../layout/about/Formation";
import Biographie from "../layout/about/Biographie";
import Competences from "../layout/about/Competences";
import Footer from "../layout/Footer";
import avatar from "../assets/img/avatar.jpg"

const About = () => {
  return (
    <div className="about-container" id="about">
      <Header />

      <div className="about-content">
        <div className="img-acrd floatant">
          <img
            src={avatar}
            alt="Avatar"
          />
        </div>

        <Biographie />

        <Identyti />

        <Competences />

        <Formation />
      </div>

      <Footer />
    </div>
  );
};

export default About;
