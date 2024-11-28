import "./Contact.css";
import MobileView from "../Mobile view/MobileView";
import { REACT_APP_RECAPTCHA_KEY } from "../utils/config";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact({ handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="contact app__section">
      {isMobile ? (
        <>
          <MobileView handleMobileModal={handleMobileModal} />
          <>
            <div className="contact__title">
              <h1 className="contact__title-text">Contact us</h1>
            </div>

            <div className="contact__wrapper">
              <div className="contact__info">
                <ul className="contact__info-list">
                  <li className="contact__info-contact">
                    <h3 className="contact__info-contact_title">Address:</h3>
                    <p className="contact__info-contact_desc">
                      All County Land Surveyor, P.C.
                      <br /> 167-17 45th Avenue
                      <br />
                      Flushing, NY 11358
                    </p>
                  </li>
                  <li className="contact__info-contact">
                    <h3 className="contact__info-contact_title">Phone:</h3>
                    <p className="contact__info-contact_desc">718-358-8114</p>
                  </li>
                  <li className="contact__info-contact">
                    <h3 className="contact__info-contact_title">Fax:</h3>
                    <p className="contact__info-contact_desc">718-353-0938</p>
                  </li>
                  <li className="contact__info-contact">
                    <h3 className="contact__info-contact_title">Email:</h3>
                    <p className="contact__info-contact_desc">
                      info@allcountylandsurveyor.com
                    </p>
                  </li>
                </ul>
              </div>
              <div className="contact__info-form">
                <form className="contact__form">
                  <h3 className="contact__form-title">Get in Contact</h3>
                  <div className="contact__form-info">
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="name"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="First Name"
                        required
                      />
                      <span className=""></span>
                    </div>
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="name"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="Last Name"
                        required
                      />
                      <span className=""></span>
                    </div>
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="phone"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="Phone"
                        required
                      />
                      <span className=""></span>
                    </div>
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="email"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="Email"
                        required
                      />
                      <span className=""></span>
                    </div>
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="city"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="City"
                        required
                      />
                      <span className=""></span>
                    </div>
                    <div className="contact__form-input_wrapper">
                      <input
                        type="text"
                        name="subject"
                        minLength="1"
                        maxLength="30"
                        className="contact__form-input"
                        placeholder="Subject"
                        required
                      />
                      <span className=""></span>
                    </div>
                  </div>
                  <div className="contact__form-input_wrapper-messageBox">
                    <textarea
                      type="text"
                      name="Message"
                      className="contact__form-input_wrapper-textArea_input"
                      placeholder="Add message here"
                      aria-invalid="false"
                      rows="10"
                    />

                    <button className="contact__form_submit-button">
                      <h3 className="contact__form_submit-button_text">
                        Submit
                      </h3>
                    </button>
                    <button
                      className="g-recaptcha"
                      data-sitekey="6LcKhGEqAAAAALHou-JC17GeeMZ9g2f_g5zx0eHi"
                      data-callback="onSubmit"
                      data-action="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          <div className="contact__title">
            <h1 className="contact__title-text">Contact us</h1>
          </div>

          <div className="contact__wrapper">
            <div className="contact__info">
              <ul className="contact__info-list">
                <li className="contact__info-contact">
                  <h3 className="contact__info-contact_title">Address:</h3>
                  <p className="contact__info-contact_desc">
                    All County Land Surveyor, P.C.
                    <br /> 167-17 45th Avenue
                    <br />
                    Flushing, NY 11358
                  </p>
                </li>
                <li className="contact__info-contact">
                  <h3 className="contact__info-contact_title">Phone:</h3>
                  <p className="contact__info-contact_desc">718-358-8114</p>
                </li>
                <li className="contact__info-contact">
                  <h3 className="contact__info-contact_title">Fax:</h3>
                  <p className="contact__info-contact_desc">718-353-0938</p>
                </li>
                <li className="contact__info-contact">
                  <h3 className="contact__info-contact_title">Email:</h3>
                  <p className="contact__info-contact_desc">
                    info@allcountylandsurveyor.com
                  </p>
                </li>
              </ul>
            </div>
            <div className="contact__info-form">
              <form className="contact__form">
                <h3 className="contact__form-title">Get in Contact</h3>
                <div className="contact__form-info">
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="name"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="First Name"
                      required
                    />
                    <span className=""></span>
                  </div>
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="name"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="Last Name"
                      required
                    />
                    <span className=""></span>
                  </div>
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="phone"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="Phone"
                      required
                    />
                    <span className=""></span>
                  </div>
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="email"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="Email"
                      required
                    />
                    <span className=""></span>
                  </div>
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="city"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="City"
                      required
                    />
                    <span className=""></span>
                  </div>
                  <div className="contact__form-input_wrapper">
                    <input
                      type="text"
                      name="subject"
                      minLength="1"
                      maxLength="30"
                      className="contact__form-input"
                      placeholder="Subject"
                      required
                    />
                    <span className=""></span>
                  </div>
                </div>
                <div className="contact__form-input_wrapper-messageBox">
                  <textarea
                    type="text"
                    name="Message"
                    className="contact__form-input_wrapper-textArea_input"
                    placeholder="Add message here"
                    aria-invalid="false"
                    rows="10"
                  />

                  <button className="contact__form_submit-button">
                    <h3 className="contact__form_submit-button_text">Submit</h3>
                  </button>
                  {/* <button className="g-recaptcha"
                    id="contact-form"
                    data-sitekey="6LdFw4IqAAAAAMfs-CsIgSjA2aaMCx5CH-SRp2Qj"
                    data-callback='onSubmit'
                    data-action='submit'>
                    <ReCAPTCHA size="normal" data-theme="dark" render="explicit" sitekey={REACT_APP_RECAPTCHA_KEY}></ReCAPTCHA>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Contact;
