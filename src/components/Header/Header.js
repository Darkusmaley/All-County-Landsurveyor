import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Header.css";

const Header = ({ isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  const pie = () => {
    console.log("pie");
  };
  return (
    <header className="header app__section">
      <div className="header__links">
        <Link to="/" className="header__link-home">
          <img
            src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
            alt=" All County Land Surveyor"
            className="header__logo"
          />
        </Link>

        <div className="header__link-group">
          <Link to="/about">
            <button className="header__link-group_buttons">About</button>
          </Link>
          <Link to="/services">
            <button className="header__link-group_buttons">Services</button>
          </Link>
          <Link to="/blog">
            <button className="header__link-group_buttons">Blog</button>
          </Link>
          <Link to="/faq">
            <button className="header__link-group_buttons">FAQ</button>
          </Link>
          <Link to="/contact">
            <button className="header__link-group_buttons">Contact Us</button>
          </Link>

          { isLoggedIn ? (
            <>
              <Link to="/profile">
                <button className="header__link-group_buttons">
                  {currentUser}
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                className="header__link-group_buttons"
                onClick={pie}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
