import React from "react";

const SocialMedia = () => {
  const [isHome, setIsHome] = React.useState(true);

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
      document.querySelector("header").style.position = "relative";
    } else {
      setIsHome(false);
    }
  }, [isHome]);

  return (
    <ul className="reseaux-sociaux">
      {isHome ? (
        <>
          <li className="envelope">
            <a href="mailto:benibiantuadi@gmail.com">
              <span></span>
              <span></span>
              <span className="fa fa-envelope"></span>
            </a>
          </li>
          <li className="github">
            <a href="https://github.com/Biantuadi">
              <span></span>
              <span></span>
              <span className="fa-brands fa-github"></span>
            </a>
          </li>
        </>
      ) : (
        <>
          {/* <li>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fa-brands fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fa-brands fa-instagram"></span>
            </a>
          </li>
          <li>
            <a href="" className="linkedin">
              <span></span>
              <span></span>
              <span className="fa-brands fa-linkedin-in"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
              <span></span>
              <span class="fa-brands fa-twitter"></span>
            </a>
          </li> */}
        </>
      )}
    </ul>
  );
};

export default SocialMedia;
