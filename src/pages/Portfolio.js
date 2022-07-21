import React from "react";
import Header from "../components/Header";
import AbsoluteLigne from "../layout/portfolio/Absolute.ligne";
import Footer from "../layout/Footer";

const Portfolio = () => {
  const br = document.querySelector(".br-media-queres");
if (br) {
  br.classList.add("br-none");

}
  return (
    <div className="portfolio-container" id="portfolio">
      <Header />

      <br />


      <div className="mesProjets">
        <h1>Mes projets</h1>
      </div>
      <br />
      <br />

      <AbsoluteLigne />

      <Footer />
    </div>
  );
};

export default Portfolio;
