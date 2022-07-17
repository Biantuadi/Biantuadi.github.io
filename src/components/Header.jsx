import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = React.useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header">
        <h1 className="h1">
          B<span className="span">iant</span>
        </h1>
        {isOpen ? (
          <i className="fas fa-times" onClick={handleClick} />
        ) : (
          <i ref={open} className="fas fa-bars" onClick={handleClick}></i>
        )}
        <Navigation />
      </div>

      {isOpen && (
        <>
          <div className="isPhone">
            <Navigation />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
