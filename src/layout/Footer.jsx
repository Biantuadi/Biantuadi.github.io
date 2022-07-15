import React from "react";
import SocialMedia from "../components/Social.Media";

const Footer = () => {
  return (
    <footer>
      <div className="lien-externe">
        <span>&copy; 2022</span>

        <span>
          <a
            href="https://toutpourleglise.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaldeo - tout pour l'église
          </a>
        </span>

        <span>
          <a
            href="https://www.ubereats.com/store/afro-taste/cqLcNhpKUTid8EnVQm1tCw?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
          >
            AfroTaste
          </a>
        </span>

        <span>
          <a
            href="https://www.canalplus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canal+
          </a>
        </span>
      </div>

      <SocialMedia />

      <img
        src="http://jonathanpruvost.fr/wp-content/themes/wp-tnresume/assets/thanks.png"
        alt="img thanks"
      />
    </footer>
  );
};

export default Footer;
