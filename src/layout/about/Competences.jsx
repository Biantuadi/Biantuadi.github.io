import React from "react";
import LogoProgramation from "../../components/about/LogoProgramation";

const Competences = () => {
  return (
    <div className="Competences-Container" id="langages">
      <h2>Compétences</h2>

      <p>
        Mes expériences professionnelles me permettent d'être aujourd'hui
        Autonome, Polyvalent et de disposer des compétences techniques dont
        voici un aperçu{" "}
      </p>

      <div className="langes-programation">
        <div className="programation">
          <ul>
            <li>React, JavaScript, NodeJS </li>
            <div className="progress">
              <div className="progress-bar Front"></div>
            </div>
            <div className="div-span">
              <span>75%</span>
            </div>
            <li>MongoDB, SQL, Express</li>
            <div className="progress">
              <div className="progress-bar Back"></div>
            </div>
            <div className="div-span">
              <span>70%</span>
            </div>
            <li>HTML5, CSS3, SASS</li>
            <div className="progress">
              <div className="progress-bar htmlCss"></div>
            </div>
            <div className="div-span">
              <span>65%</span>
            </div>
            <li>Git, Github</li>
            <div className="progress">
              <div className="progress-bar git"></div>
            </div>
            <div className="div-span">
              <span>60%</span>
            </div>
          </ul>
        </div>

        <div className="icons">
          <ul>
            <li>
              <i className="fa fa-cogs"></i>
              <span>Gestion de projet</span>
            </li>
            <li>
              <i className="fa fa-users"></i>
              <span>Travail en équipe</span>
            </li>
            <li>
              <i className="fa fa-flask"></i>
              <span className="veille">Veille technologique</span>
            </li>
            <li>
              <i className="fa fa-graduation-cap"></i>
              <span>Formation</span>
            </li>
          </ul>
        </div>

        <ul className="logo-orogramation">
          <LogoProgramation />
        </ul>
      </div>
    </div>
  );
};

export default Competences;
