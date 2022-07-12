import React from "react";
import Header from "../components/Header";
import cvPdf from "../assets/img/CV.pdf";
import { useTypewriter } from "react-simple-typewriter";
import SocialMedia from "../components/Social.Media";

const Home = () => {
  const { text } = useTypewriter({
    words: ["Passionné", "Créatif", "Curieux", "Dévoué", "Persévérant"],
    loop: 0, // Infinit
  });

  return (
    <div className="container-home-page">
      <Header />

      <div className="main-center-home">
        <SocialMedia />

        <main className="main-home">
          <span className="span-salut">Salut ! Moi c'est</span>
          <h1 className="beniBiantuadi">
            Beni<span>.</span>Biantuadi
          </h1>
          <div className="footer-identity">
            <span>Je suis</span>
            <h2>{text}</h2>
          </div>
          <br />
          <button className="btn-home" onClick={() => window.open(cvPdf)}>
            Voir mon CV
          </button>
        </main>
      </div>
    </div>
  );
};

export default Home;
