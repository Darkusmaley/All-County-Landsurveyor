import "./Contact.css";
import Header from "../Header/Header";

function Contact(printMsg) {
  return (
    <section className="contact app__section">
      <Header />
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

                <button
                  className="contact__form_submit-button"
                  // data-sitekey="6LcKhGEqAAAAALHou-JC17GeeMZ9g2f_g5zx0eHi"
                  // onSubmit={captcha}
                >
                  <h3 className="contact__form_submit-button_text">Submit</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </section>
  );
}

export default Contact;
