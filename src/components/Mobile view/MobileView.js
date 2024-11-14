import React from "react";
import menu from "../../Images/menu.svg";
import "./MobileView.css";
import { Link } from "react-router-dom";

const MobileView = ({ handleMobileModal }) => {
  return (
    <header className="mobile-header">
      <div className="mobile-header__container">
        <Link to="/">
          <button
            className="mobile-header__button_home"

          >
            <img
              src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
              alt=" All County Land Surveyor"
              className="mobile-header__header__logo"
            />
          </button>
        </Link>
        <button
          className="mobile-header__menu-button"
          onClick={handleMobileModal}
        >
          <img
            className="mobile-header__menu-icon"
            alt="Menu Icon"
            src={menu}
          />
        </button>
      </div>
      <div></div>
    </header>
  );
};

export default MobileView;
