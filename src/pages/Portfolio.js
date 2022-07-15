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
    <div className="portfolio-container">
      <Header />

      <br />


      <div className="mesProjets">
        <h1>Mes projets</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          ipsam odio! Officia maiores fugiat porro quibusdam commodi. Molestiae,
          architecto. Cupiditate sit eligendi aperiam numquam sunt quo voluptas
          quasi quam perspiciatis reiciendis laboriosam culpa similique, labore
          corrupti facilis ea. Corporis placeat error veritatis dolorum dicta
          odit dolorem dolore sint voluptatum architecto.
        </p>
      </div>
      <br />
      <br />

      <AbsoluteLigne />

      <Footer />
    </div>
  );
};

export default Portfolio;
