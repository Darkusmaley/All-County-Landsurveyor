import React from "react";
// import useNavigation from "../Navigation/Navigation";
import menu from "../../Images/menu.svg";

import "./MobileView.css";

const MobileView = ({ handleMobileModal }) => {
  //   const { navigateToHome } = useNavigation();

  return (
    <header className="mobile-header">
      <div className="mobile-header__container">
        <button
          className="mobile-header__button_home"
          //   onClick={navigateToHome}
        >
          {/* <h3 className="mobile-header__button_home-text">
            All County Land Surveyor
          </h3> */}
          <img
            src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
            alt=" All County Land Surveyor"
            className="mobile-header__header__logo"
          />
        </button>
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
