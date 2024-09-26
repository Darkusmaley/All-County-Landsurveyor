import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header app__section">
      <div className="header__links">
        <Link to="/">
          <img
            src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
            alt=" All County Land Surveyor"
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
          <Link>
            <button className="header__link-group_buttons">FAQ</button>
          </Link>
          <Link to="/contact">
            <button className="header__link-group_buttons">Contact Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
