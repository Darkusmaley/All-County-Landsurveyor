import "./FAQ.css";
import Header from "../Header/Header";
import MobileView from "../Mobile view/MobileView";
import { useEffect, useState } from "react";


function FAQ({ handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (


    <section className="faq app__section">

      {isMobile ? (<> <MobileView handleMobileModal={handleMobileModal} /> <div className="faq__title">
        <h1 className="faq__title-text">FAQ</h1>
      </div>
        <h2 className="faq__subtext ">Small intro</h2>
        <div className="faq__questions">
          <div className="faq__question">
            pineapple
            <div className="faq__question-answer">tree</div>
          </div>
          <div className="faq__question">
            asdasd
            <div className="faq__question-answer">asdasd</div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
          <div className="faq__question">
            <div className="faq__question-answer"></div>
          </div>
        </div></>) : (<> <Header />

          <div className="faq__title">
            <h1 className="faq__title-text">FAQ</h1>
          </div>
          <h2 className="faq__subtext ">Small intro</h2>
          <div className="faq__questions">
            <div className="faq__question">
              pineapple
              <div className="faq__question-answer">tree</div>
            </div>
            <div className="faq__question">
              asdasd
              <div className="faq__question-answer">asdasd</div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
            <div className="faq__question">
              <div className="faq__question-answer"></div>
            </div>
          </div>
        </>)}

    </section>
  );
}

export default FAQ;
