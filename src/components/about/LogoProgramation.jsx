import React from "react";
import logoReact from "../../assets/logosProgramation/react.png";
import logoNode from "../../assets/logosProgramation/Node.js.svg.png";
import logoMongo from "../../assets/logosProgramation/mongoDB.png";
import javascript from "../../assets/logosProgramation/javascript.png";
import html from "../../assets/logosProgramation/html.png";
import css from "../../assets/logosProgramation/CSS3_logo.svg.png";
import sass from "../../assets/logosProgramation/sass.png";
import git from "../../assets/logosProgramation/git.png";
import github from "../../assets/logosProgramation/github.png";
import vsCode from "../../assets/logosProgramation/Vs code.png";
import mySql from "../../assets/logosProgramation/mysql.png";
import gitlab from "../../assets/logosProgramation/gitlab.png"; 

const LogoProgramation = () => {
  return (
    <>
      {" "}
      <li>
        {" "}
        <img src={logoReact} alt="logo react" />
      </li>
      <li>
        {" "}
        <img src={logoNode} alt="logo node" />
      </li>
      <li>
        {" "}
        <img src={logoMongo} alt="logo mongo" />
      </li>
      <li>
        {" "}
        <img src={javascript} alt="logo javascript" />
      </li>
      <li>
        {" "}
        <img src={html} alt="logo html" />
      </li>
      <li>
        {" "}
        <img src={css} alt="logo css" />
      </li>
      <li>
        {" "}
        <img src={mySql} alt="logo mysql" />
      </li>
      <li>
        {" "}
        <img src={sass} alt="logo sass" />
      </li>
      <li>
        {" "}
        <img src={git} alt="logo git" />
      </li>
      <li>
        {" "}
        <img src={github} alt="logo github" />
      </li>
      <li>
        {" "}
        <img src={vsCode} alt="logo vs code" />
      </li>
      <li>
        {" "}
        <img src={gitlab} alt="logo gitlab" />
      </li> 
    </>
  );
};

export default LogoProgramation;
