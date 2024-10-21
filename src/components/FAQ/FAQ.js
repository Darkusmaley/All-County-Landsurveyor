import "./FAQ.css";
import Header from "../Header/Header";

function FAQ() {
  return (
    <section className="faq app__section">
      <Header />
      <>
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
      </>
    </section>
  );
}

export default FAQ;
