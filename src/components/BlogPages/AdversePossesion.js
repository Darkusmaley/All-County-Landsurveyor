import "./blogPages.css";
import Header from "../Header/Header";
import MobileView from "../Mobile view/MobileView";
import { useEffect, useState } from "react";

function AdversePossession({handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="blog__article app__section">
      {isMobile ? (<> <MobileView handleMobileModal={handleMobileModal} />    <>

        <div className="blog__crossbar"></div>
        <div className="article">
          <h2 className="article__title">
            New York’s Former Adverse Possession Law
          </h2>
          <img
            src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/bews3.png"
            className="blog__post-image"
            alt="group of surveyers"
          />
          <p className="article__desc">
            Prior to 2008, the New York rule allowed for a broad interpretation
            of the elements of a successful adverse possession claim. New York
            recognized a successful claim even if the adverse possessor knew,
            upon occupation, that the land was another’s. Additionally, New
            York’s former law allowed for a wide range of productive activities
            that would be considered adverse. A claimant only needed to show
            that the land was “usually cultivated or improved” or “protected by
            a substantial enclosure” under his direction for the ten-year
            statutory period. The courts recognized that the simple acts of
            mowing the lawn or building and maintaining a fence for the
            statutory period were sufficient for successful adverse possession
            claims. Even the placement of shrubs was deemed sufficient.
          </p>
          <p className="article__desc">
            Many legal scholars suggest that adverse users with intent to divest
            their neighbors of their property should not be rewarded for their
            malicious purposes. However, the intended focus of adverse
            possession was not on the knowledge of the industrious user, but
            rather on the failure of the title owner to act. Even if the adverse
            user was using and maintaining the property with the subjective
            intent to gain title through adverse possession, his objective could
            not be realized without the failure of the current owner to either
            (1) put his own land into production or (2) thwart the adverse
            user’s actions. Therefore, the owner cannot blame the adverse user’s
            occupation for his loss, but rather his own failure to be a
            personally responsible landowner by not regularly inspecting,
            maintaining, and controlling his own property.
          </p>
          <p className="article__desc">
            Mowing the lawn, building a fence, and planting shrubs may be
            considered trivial acts at first glance, but a deeper examination
            reveals that these actions exemplify adverse possession’s intended
            principles. The owner’s failure to inspect, maintain, and control
            his property frequently prompted the adverse user to engage in these
            activities. Aside from the adverse user’s knowledge (or lack
            thereof) of ownership of the disputed property, his actions put the
            otherwise untamed property into productive use. These actions serve
            the community by conserving the neighborhood standard and
            maintaining property values. Furthermore, the adverse user provides
            this service through his own labor and expense. Therefore, when
            title transfers to the adverse possessor, it rewards him for picking
            up the slack of the now former owner. Likewise, the prior owner is
            penalized for neglecting his property, which, if not for the adverse
            user, would have fallen into unsightly disrepair.
          </p>
          <p className="article__desc">
            Lastly, the former owner cannot claim that he is overly burdened by
            the requirements to inspect, maintain, and control his property. In
            New York, the owner could accomplish this responsibility simply by
            walking his land once every ten years and giving permission to those
            engaging in activities on his property. Failure of the owner to even
            engage in this simple activity clearly shows his lack of personal
            responsibility and care for his holdings. Once again, a primary goal
            of adverse possession is to award land to those “who value it much
            more highly than . . . the record owners.”
          </p>
        </div>
      </></>) : (<> <Header />

        <div className="blog__crossbar"></div>
        <div className="article">
          <h2 className="article__title">
            New York’s Former Adverse Possession Law
          </h2>
          <img
            src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/bews3.png"
            className="blog__post-image"
            alt="group of surveyers"
          />
          <p className="article__desc">
            Prior to 2008, the New York rule allowed for a broad interpretation
            of the elements of a successful adverse possession claim. New York
            recognized a successful claim even if the adverse possessor knew,
            upon occupation, that the land was another’s. Additionally, New
            York’s former law allowed for a wide range of productive activities
            that would be considered adverse. A claimant only needed to show
            that the land was “usually cultivated or improved” or “protected by
            a substantial enclosure” under his direction for the ten-year
            statutory period. The courts recognized that the simple acts of
            mowing the lawn or building and maintaining a fence for the
            statutory period were sufficient for successful adverse possession
            claims. Even the placement of shrubs was deemed sufficient.
          </p>
          <p className="article__desc">
            Many legal scholars suggest that adverse users with intent to divest
            their neighbors of their property should not be rewarded for their
            malicious purposes. However, the intended focus of adverse
            possession was not on the knowledge of the industrious user, but
            rather on the failure of the title owner to act. Even if the adverse
            user was using and maintaining the property with the subjective
            intent to gain title through adverse possession, his objective could
            not be realized without the failure of the current owner to either
            (1) put his own land into production or (2) thwart the adverse
            user’s actions. Therefore, the owner cannot blame the adverse user’s
            occupation for his loss, but rather his own failure to be a
            personally responsible landowner by not regularly inspecting,
            maintaining, and controlling his own property.
          </p>
          <p className="article__desc">
            Mowing the lawn, building a fence, and planting shrubs may be
            considered trivial acts at first glance, but a deeper examination
            reveals that these actions exemplify adverse possession’s intended
            principles. The owner’s failure to inspect, maintain, and control
            his property frequently prompted the adverse user to engage in these
            activities. Aside from the adverse user’s knowledge (or lack
            thereof) of ownership of the disputed property, his actions put the
            otherwise untamed property into productive use. These actions serve
            the community by conserving the neighborhood standard and
            maintaining property values. Furthermore, the adverse user provides
            this service through his own labor and expense. Therefore, when
            title transfers to the adverse possessor, it rewards him for picking
            up the slack of the now former owner. Likewise, the prior owner is
            penalized for neglecting his property, which, if not for the adverse
            user, would have fallen into unsightly disrepair.
          </p>
          <p className="article__desc">
            Lastly, the former owner cannot claim that he is overly burdened by
            the requirements to inspect, maintain, and control his property. In
            New York, the owner could accomplish this responsibility simply by
            walking his land once every ten years and giving permission to those
            engaging in activities on his property. Failure of the owner to even
            engage in this simple activity clearly shows his lack of personal
            responsibility and care for his holdings. Once again, a primary goal
            of adverse possession is to award land to those “who value it much
            more highly than . . . the record owners.”
          </p>
        </div>
      </>)}

    </section>
  );
}

export default AdversePossession;
