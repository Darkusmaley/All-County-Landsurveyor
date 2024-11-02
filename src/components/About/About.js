import "./About.css";
import Header from "../Header/Header";
import MobileView from "../Mobile view/MobileView";
import { useEffect, useState } from "react";

function About({ handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="about app__section">
      {isMobile ? (
        <>
          <MobileView handleMobileModal={handleMobileModal} />
          <div className="about__title">
            <h1 className="about__title-text">About</h1>
          </div>
          <h2 className="about__subtext ">
            We are a land surveying firm with over 30 years of experience
            primarily serving the NY metropolitan area (NYC, Nassau, Suffolk,
            Westchester, Rockland and Beyond) But with operations based in NYC
            and Rochester, we are able to offer our services in virtually all
            parts of NYS with competitive prices and quick turnaround times. We
            offer traditional surveying services such as boundary surveys,
            ALTA/NSPS surveys, architectural surveys, construction layout,
            as-built surveys, elevation certificates, and more. We also offer 3D
            laser scanning services for surveying applications and beyond. Our
            firm is equipped with the latest technology and professional
            expertise to meet your surveying and geospatial needs!
          </h2>
          <h2 className="about__staff ">MEET OUR CORE STAFF</h2>
          <ul className="about__staff-members">
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                Donal O’Buckley, PLS
              </span>
              Principal Surveyor and Owner
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                Jonathan O’Buckley
              </span>
              Operations Manager, Survey Technician
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                William O’Buckley
              </span>
              Operations, Western New York
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">Kevin Park</span>
              Operations Associate, Survey Technician
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                William N. Garifal, III
              </span>
              Field Operations, Survey Technician
            </li>
          </ul>
        </>
      ) : (
        <>
          <Header />

          <div className="about__title">
            <h1 className="about__title-text">About</h1>
          </div>
          <h2 className="about__subtext ">
            We are a land surveying firm with over 30 years of experience
            primarily serving the NY metropolitan area (NYC, Nassau, Suffolk,
            Westchester, Rockland and Beyond) But with operations based in NYC
            and Rochester, we are able to offer our services in virtually all
            parts of NYS with competitive prices and quick turnaround times. We
            offer traditional surveying services such as boundary surveys,
            ALTA/NSPS surveys, architectural surveys, construction layout,
            as-built surveys, elevation certificates, and more. We also offer 3D
            laser scanning services for surveying applications and beyond. Our
            firm is equipped with the latest technology and professional
            expertise to meet your surveying and geospatial needs!
          </h2>
          <h2 className="about__staff ">MEET OUR CORE STAFF</h2>
          <ul className="about__staff-members">
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                Donal O’Buckley, PLS
              </span>
              Principal Surveyor and Owner
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                Jonathan O’Buckley
              </span>
              Operations Manager, Survey Technician
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                William O’Buckley
              </span>
              Operations, Western New York
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">Kevin Park</span>
              Operations Associate, Survey Technician
            </li>
            <li className="about__staff-member">
              <span className="aboout__staff-member_name">
                William N. Garifal, III
              </span>
              Field Operations, Survey Technician
            </li>
          </ul>
        </>
      )}
    </section>
  );
}

export default About;
