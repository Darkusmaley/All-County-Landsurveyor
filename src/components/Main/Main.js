import "./Main.css";
import MobileView from "../Mobile view/MobileView";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main({ handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main app__section">
      {isMobile ? (
        <>
          <MobileView handleMobileModal={handleMobileModal} />
          <h1 className="main__title">
            Looking for a professional land surveyor?{" "}
          </h1>
          <h2 className="main__subtext">
            Are you in need of a NY land surveyor for all of your land surveying
            needs? If so, you’ve come to the right place! Here at All County
            Land Surveying, we have the tools and experience to complete any and
            all jobs you have. With more than 40 years of combined land
            surveying experience, no job is too challenging. Our services extend
            far past the boundaries of the 5 boroughs. With a new Western NY
            Branch servicing areas such as Rochester Buffalo, and Syracuse NY,
            we have you
          </h2>
          <span>
            <Link to="/about">
              <button className="main__subtext-link">More about us</button>
            </Link>
          </span>
        </>
      ) : (
        <>
          {/* <Header isLoggedIn={isLoggedIn} /> */}
          <section className="main__content">
            <div>
              <h1 className="main__title">
                Looking for a professional land surveyor?
              </h1>
              <h2 className="main__subtext">
                Are you in need of a NY land surveyor for all of your land
                surveying needs? If so, you’ve come to the right place! Here at
                All County Land Surveying, we have the tools and experience to
                complete any and all jobs you have. With more than 40 years of
                combined land surveying experience, no job is too challenging.
                Our services extend far past the boundaries of the 5 boroughs.
                With a new Western NY Branch servicing areas such as Rochester
                Buffalo, and Syracuse NY, we have you
              </h2>
              <span>
                <Link to="/about">
                  <button className="main__subtext-link">More about us</button>
                </Link>
              </span>
            </div>

            <div className="surveying-services">
              <h2 className="surveying-services__title">
                Our Surveying Services
              </h2>
              <ul className="survey-services__list">
                <li className="survey-services__list-service">
                  ALTA/NSPS Title Survey
                  <span className="survey-services__list-service_desc">
                    An ALTA/NSPS Land Title Survey is a boundary survey that
                    complies with the standards of the American Land Title
                    Association (ALTA), and the National Society of Professional
                    Surveyors, Inc.
                    <Link to="/services">
                      <button className="surver-services__list-button_read-more">
                        Read more...
                      </button>
                    </Link>
                  </span>
                </li>
                <li className="survey-services__list-service">
                  Architectural Survey
                  <span className="survey-services__list-service_desc">
                    An Architectural Survey, also known as a Topographical
                    Survey, is a survey used by architects, engineers,
                    contractors or municipalities for design and construction
                    purposes. It is a boundary survey which may
                    <Link to="/services">
                      <button className="surver-services__list-button_read-more">
                        Read more...
                      </button>
                    </Link>
                  </span>
                </li>
                <li className="survey-services__list-service">
                  Boundary/Title Survey
                  <span className="survey-services__list-service_desc">
                    A Boundary/Title Survey locates the boundaries of a property
                    and the extent of ownership. It will also identify property
                    encroachments, easements, and right-of-ways. A scaled
                    map/plat is prepared
                    <Link to="services">
                      <button className="surver-services__list-button_read-more">
                        Read more...
                      </button>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
