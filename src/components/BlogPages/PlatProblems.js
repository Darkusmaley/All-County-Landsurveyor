import "./blogPages.css";
import MobileView from "../Mobile view/MobileView";
import { useEffect, useState } from "react";

function PlatProblems({ handleMobileModal }) {
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
      {isMobile ? (
        <>
          {" "}
          <MobileView handleMobileModal={handleMobileModal} />{" "}
          <>
            <div className="blog__crossbar"></div>
            <div className="article">
              <h2 className="article__title">
                Plat problems: Surveyor tells county about problems with
                subdivision’s layout
              </h2>
              <img
                src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/news2.png"
                className="blog__post-image"
                alt="buildings under construction"
              />
              <p className="article__desc">talk to jon about this blog post</p>
              <p className="article__desc"></p>
              <p className="article__desc"></p>
              <p className="article__desc"></p>
              <p className="article__desc"></p>
              <p className="article__desc"></p>
            </div>
          </>
        </>
      ) : (
        <>
          <div className="blog__crossbar"></div>
          <div className="article">
            <h2 className="article__title">
              Plat problems: Surveyor tells county about problems with
              subdivision’s layout
            </h2>
            <img
              src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/news2.png"
              className="blog__post-image"
              alt="buildings under construction"
            />
            <p className="article__desc">talk to jon about this blog post</p>
            <p className="article__desc"></p>
            <p className="article__desc"></p>
            <p className="article__desc"></p>
            <p className="article__desc"></p>
            <p className="article__desc"></p>
          </div>
        </>
      )}
    </section>
  );
}

export default PlatProblems;
