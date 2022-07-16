import React from "react";
import Header from "../components/Header";
import Identyti from "../layout/about/Identyti";
import Formation from "../layout/about/Formation";
import Biographie from "../layout/about/Biographie";
import Competences from "../layout/about/Competences";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <div className="about-container" id="about">
      <Header />

      <div className="about-content">
        <div className="img-acrd floatant">
          <img
            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.1997-6/293047593_402145791891421_513477303862981928_n.png?stp=dst-png_s526x395&_nc_cat=111&ccb=1-7&_nc_sid=ac3552&_nc_ohc=5VO0PRU0dkkAX8dVYlp&tn=1yQH8_KIBWII-jD6&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_mCmC4nVwA6rAXr3wzo2lce35EMR0zCggVYoYXHtIIYw&oe=62D7BA0C"
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
