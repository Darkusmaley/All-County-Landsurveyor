// import { useContext } from "react";
import "./MobileModal.css";
import { Link } from "react-router-dom";
// import { CurrentPageContext } from "../Context/CurrentPageContext";

const MobileModal = ({
  isLoggedIn,
  handleLoginModal,
  handleCloseModal,
  handleLogout,
}) => {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // const { currentPage } = useContext(CurrentPageContext);

  return (
    <div className="mobile-modal" onClick={handleOverlay}>
      <div className="mobile-modal__container">
        <div className="mobile-modal__header">
          <Link to="/">
            <img
              src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
              alt=" All County Land Surveyor"
              className="mobile-modal__logo"
            />
          </Link>
          <button
            className="mobile-modal__close-button"
            onClick={handleCloseModal}
          />
        </div>
        <div className="mobile-modal__links">
          <Link to="/">
            <button className="mobile-modal__link" onClick={handleCloseModal}>
              Home
            </button>
          </Link>

          <Link to="/about">
            <button className="mobile-modal__link " onClick={handleCloseModal}>
              About
            </button>
          </Link>

          <Link to={"/services"}>
            <button className="mobile-modal__link" onClick={handleCloseModal}>
              Services
            </button>
          </Link>

          <Link to={"/blog"}>
            <button className="mobile-modal__link" onClick={handleCloseModal}>
              Blog
            </button>
          </Link>

          <Link to={"/faq"}>
            <button className="mobile-modal__link" onClick={handleCloseModal}>
              FAQ
            </button>
          </Link>

          <Link to={"/contact"}>
            <button className="mobile-modal__link" onClick={handleCloseModal}>
              Contact Us
            </button>
          </Link>

          {/* <Link to={"/"}>
            <button className="mobile-modal__">
          
            </button>
          </Link> */}

          {/* {!isLoggedIn ? (
            <button
              className="mobile-modal__signin-button"
              onClick={handleLoginModal}
            >
              Sign in
            </button>
          ) : (
            <button
              className="mobile-modal__logout-button"
              onClick={handleLogout}
            >
              Log out
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
