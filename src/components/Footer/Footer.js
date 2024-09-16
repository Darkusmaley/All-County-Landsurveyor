import "./Footer.css";
import FacebookLogo from "../../Images/facebook.svg";
import TwitterLogo from "../../Images/twitter.svg";
import LinkedInLogo from "../../Images/linkedIn.svg";
import YoutubeLogo from "../../Images/youtube.svg";

function Footer() {
  return (
    <footer className="footer app__section">
      <div className="footer__info">
        <div className="footer__logo">
          <img
            src="https://allcountylandsurveyor.com/wp-content/themes/allcounty/images/logo.png"
            alt=" All County Land Surveyor"
          />
        </div>
        <div className="footer__contact-info">
          <div className="footer__contacts">
            <ul className="footer__contacts-list">
              <li className="footer__contact">Phone: 718-358-8114 </li>
              <li className="footer__contact">Fax: 718-353-0938</li>
              <li className="footer__contact">
                Location: 167-17 45th Avenue, Flushing, NY 11358
              </li>
            </ul>
          </div>
          <div className="footer__social_links">
            <a
              href="https://www.facebook.com/aclsny"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FacebookLogo}
                className="footer__social-link"
                alt="Facebook logo"
              />
            </a>
            <a href="https://x.com/aclsny" target="_blank" rel="noreferrer">
              <img
                src={TwitterLogo}
                className="footer__social-link"
                alt="Twitter logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/aclsny/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedInLogo}
                className="footer__social-link"
                alt="LinkedIn logo"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLTFk9xxeRAqYX8k6NzFNfA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={YoutubeLogo}
                className="footer__social-link"
                alt="Youtube logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
