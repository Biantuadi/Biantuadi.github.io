import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const FormContact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const emailError = useRef(null);
  // const nameError = useRef(null);
  const messageError = useRef(null);

  const form = useRef();
  const btn = useRef();
  const successBtn = useRef();

  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  useEffect(() => {
    if (name === "" || email === "" || message === "") {
      btn.current.disabled = true;
      btn.current.classList.add("disabled");
    } else {
      btn.current.disabled = false;
      btn.current.classList.remove("disabled");
    }
    if (message.length > 5) {
      messageError.current.classList.remove("messageError");
      messageError.current.classList.add("error");
    }
  }, [name, email, message]);

  const ContactMe = (e) => {
    e.preventDefault();

    if (email.indexOf("@") === -1)
      return (emailError.current.innerHTML = "Saisissez un email valide");
    else if (message.length < 5)
      return messageError.current.classList.add("messageError");

    btn.current.innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

    emailjs
      .sendForm(
        "service_19f7ruw",
        "template_lke8xqq",
        form.current,
        "iST1Sm_IMw2nRU0yh"
      )
      .then(
        (result) => {
          setHasSubmitted(true);
          form.current.classList.add("blur");
          btn.current.innerHTML = "Envoyé";
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <>
      <form ref={form} className="Form-contact" onSubmit={ContactMe}>
        <div className="Form-contact__title">
          <h2>Contact</h2>
        </div>
        <br />
        <br />

        <div className="Form-contact__input-name">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            placeholder="Votre nom"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />

        <div className="Form-contact__input-email">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Votre email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <br />

        <div className="Form-contact__input-message">
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <br />
          <span ref={messageError} className="error">
            Message trop court
          </span>
        </div>
        <br />

        <div className="Form-contact__input-btn">
          <button ref={btn} type="submit" disabled={false}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
      {hasSubmitted && (
        <>
          <div className="Form-contact__success">
            <p>
              Votre message m'a bien été envoyé ! Je vous remercie et vous
              réponds au plus vite.
            </p>
            <br />
            <button ref={successBtn}><NavLink to="/">Revenir au site</NavLink></button>
          </div>
        </>
      )}
    </>
  );
};

export default FormContact;
