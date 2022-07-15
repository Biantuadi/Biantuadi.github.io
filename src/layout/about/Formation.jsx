import React from "react";
import Etna from "../../assets/logosEcoles/etna.png";
import Openclassrooms from "../../assets/logosEcoles/Logo_OpenClassrooms.png";
import upc from "../../assets/logosEcoles/upc.png";
import tbg from "../../assets/logosEcoles/tbg.jfif";
import ufc from "../../assets/logosEcoles/ufc.jfif";

const Formation = () => {
  return (
    <div className="about-Formation" id="parcours">
      <h2>Formations</h2>
      <i class="fa-solid fa-graduation-cap"></i>

      <div className="Formation-each">
        <div className="Etna">
          <div className="title-img">
            <a href="http://Etna.io" target="_blank" rel="noopener noreferrer">
              <h3>
                Responsable de projet web et mobile | <span>ETNA Bac+3</span>{" "}
                <em>/ Octobre 2022</em>
              </h3>
            </a>
            <img src={Etna} alt="etna" className="Etna img" />
          </div>
          <p>
            Développer des compétences en C permettant de créer un jeu,
            Appréhender les statistiques par l’algorithmique, Réaliser un POC
            fonctionnel, Architecturer une application web, Apprendre à
            développer une API web, Savoir identifier les failles d’une
            application web, Maîtriser la mise en place d’un réseau, Appréhender
            l’administration système Linux et Windows, Concevoir et
            architecturer des bases de données, Niveau B2 en anglais
          </p>
        </div>

        <div className="openclassroom">
          <div className="title-img">
            <a
              href="https://openclassrooms.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                développeur Web | <span>Openclassrooms Bac+2</span>{" "}
                <em>/ Novembre 2021 - à Juillet 2022</em>
              </h3>
            </a>
            <img
              src={Openclassrooms}
              alt="openclassrooms"
              className="Openclassrooms img"
            />
          </div>
          <p>
            • découper, assembler et intégrer tous les éléments d’une maquette
            graphique en HTML5 et CSS ; <br />
            • ajouter du contenu audio et vidéo en HTML5 ; <br />
            • animer les pages web avec CSS3 ; <br />
            • appliquer les standards du web et les normes en vigueur ; <br />
            • construire un site web fluide s’adaptant à tout type d’écran (web,
            smartphone et tablette) ; <br />
            • améliorer le référencement naturel en utilisant les balises selon
            leur sémantique ; <br />
            • faire réagir la page web en fonction des actions de l’utilisateur
            en JavaScript ; <br />
            • se connecter à un service web pour exploiter des données tierces
            (API) ; <br />
            • gérer les comptes utilisateurs ; <br />
            • concevoir un site maintenable grâce à la gestion des erreurs et
            exceptions ; <br />
            • créer, gérer et afficher le contenu d’une base de données. <br />
          </p>
        </div>

        <div className="upc">
          <div className="title-img">
            <a
              href="https://upc.ac.cd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Economie | <span>UPC Licence 2</span>{" "}
                <em>/ sept 2019 - à octobre 2021</em>
              </h3>
            </a>
            <img src={upc} alt="upc" className="upc img" />
          </div>
          <p>
            Connaître les bases de l’économie, Connaître les bases de la gestion
            de la production, Connaître les bases de la gestion de la
            distribution, Connaître les bases de la gestion de la vente,
            Connaître les bases de la gestion des stocks, Connaître les bases de
            la gestion des finances, Connaître les bases de la gestion des
            entreprises, Connaître les bases de la gestion des organisations,
            Connaître les bases de la gestion des équipes,
          </p>
        </div>

        <div className="ufc">
          <div className="title-img">
            <a
              href="https://ufc.education/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Anglais avancées | <span>UFC B1</span>{" "}
                <em>/ juillet 2020 - à octobre 2021</em>
              </h3>
            </a>
            <img src={ufc} alt="ufc" className="ufc img" />
          </div>
          <p>
            S'exprimer de façon claire et détaillée sur une grande gamme de
            sujets, émettre un avis sur un sujet d’actualité et exposer les
            avantages et les inconvénients de différentes possibilités.
          </p>
        </div>

        <div className="tbg">
          <div className="title-img">
            <a
              href="https://www.thebestgroup.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                {" "}
                Réseaux sociaux | <span>TBG Mastering</span>
                <em> / sept 2019</em>{" "}
              </h3>
            </a>

            <img src={tbg} alt="tbg" className="tbg img" />
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            quas, vero iure placeat necessitatibus ad animi dolore excepturi aut
            et nesciunt est eveniet esse deleniti maxime magni ipsum. Molestias,
            sunt. In labore cum optio laudantium nesciunt soluta magnam aliquid
            suscipit a! Nulla facere temporibus in! Exercitationem aliquam
            ducimus ea neque!
          </p>
        </div>

        <div className="bac">
          <a
            href="https://www.facebook.com/pages/category/Middle-School/Complexe-scolaire-mafuta-311307459744808/"
            target="_blank"
            rel="noopener noreferrer"
          >

          <h3>
            Bac Mathématiques | <span>CS MAFUTA</span> <em>/ juillet 2019</em>{" "}
          </h3>
          </a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            mollitia quo pariatur ad quod, ipsum distinctio error quos culpa
            eligendi. Ipsum nisi delectus soluta ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
