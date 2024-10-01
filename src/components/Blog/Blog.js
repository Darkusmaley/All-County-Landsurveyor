import "./Blog.css";
import Header from "../Header/Header";
import Calender from "../../Images/calender.svg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="blog app__section">
      <Header />
      <>
        <div className="blog__title">
          <h1 className="blog__title-text">Blog</h1>
        </div>
        <div className="blog__content">
          <div className="blog__content-grid">
            <div className="blog__content-post">
              <div className="blog__content-post_image">
                <Link to="/need-a-survey" className="blog__content-post_link">
                  <img
                    src="https://allcountylandsurveyor.com/wp-content/uploads/2023/02/photo_2023-01-06_15-22-37-e1676322692223.jpg"
                    className="blog__post-image"
                    alt="surveyer in forest"
                  />
                </Link>
              </div>
              <div className="blog__content-post_desc">
                <Link to="/need-a-survey" className="blog__content-post_link">
                  <h2 className="blog__content-post_title">
                    Need a Survey for a Tree on Your Property Line?
                  </h2>
                </Link>
              </div>
              <div className="blog__content-post_date">
                <img
                  src={Calender}
                  className="blog__post-date_icon"
                  alt="calender"
                />
                <div className="blog__content-post_date-text">
                  <span className="blog__content-post_date-day">13</span> Feb,
                  2023
                </div>
              </div>
              <div className="blog__content-post_details">
                Allcidmin | 0 here is where the comment counter is
              </div>

              <div className="blog__content-post_paragraph">
                <p className="blog__content-post_paragraph-text">
                  Owning property can be a proud moment for any person. While
                  most people look forward to owning the building on that
                  property, the land offers many issues that any homeowner will
                  have to face. One of those issues is having to determine what
                  you own based on where your property is located. You’re going
                  to find many things to
                </p>
                <Link
                  to="/need-a-survey"
                  className="blog__content-post_paragraph-link"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="blog__content-post">
              <div className="blog__content-post_image">
                <Link to="/can-you-order" className="blog__content-post_link">
                  <img
                    src="https://allcountylandsurveyor.com/wp-content/uploads/2023/02/photo_2023-01-06_15-23-27-e1675813398968.jpg"
                    className="blog__post-image"
                    alt="survey on balcony"
                  />
                </Link>
              </div>
              <div className="blog__content-post_desc">
                <Link to="/can-you-order" className="blog__content-post_link">
                  <h2 className="blog__content-post_title">
                    Can You Order a Survey in the Winter?
                  </h2>
                </Link>
              </div>
              <div className="blog__content-post_date">
                <img
                  src={Calender}
                  className="blog__post-date_icon"
                  alt="calender"
                />
                <div className="blog__content-post_date-text">
                  <span className="blog__content-post_date-day">5</span> Feb,
                  2023
                </div>
              </div>

              <div className="blog__content-post_details">
                Allcidmin | 0 here is where the comment counter is
              </div>
              <div className="blog__content-post_paragraph">
                <p className="blog__content-post_paragraph-text">
                  Whether you’re a homeowner or an enterprise level client,
                  getting a survey done in the winter can seem like an
                  impossible task. While most people have difficulty driving to
                  work during a dusting of snow, land surveyors are expected to
                  complete jobs that can range from the average home to acres of
                  farmland. So this brings up the question,
                </p>
                <Link
                  to="/can-you-order"
                  className="blog__content-post_paragraph-link"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="blog__content-post">
              <div className="blog__content-post_image">
                <Link
                  to="/plat-problems"
                  className="blog__content-post_link"
                >
                  <img
                    src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/news2.png"
                    className="blog__post-image"
                    alt="cunstruction in progress"
                  />
                </Link>
              </div>
              <div className="blog__content-post_desc">
                <h2 className="blog__content-post_title">
                  <Link
                    to="/plat-problems"
                    className="blog__content-post_link"
                  >
                    Plat problems: Surveyor tells county about problems with
                    subdivision’s layout
                  </Link>
                </h2>
              </div>
              <div className="blog__content-post_date">
                <img
                  src={Calender}
                  className="blog__post-date_icon"
                  alt="calender"
                />
                <div className="blog__content-post_date-text">
                  <span className="blog__content-post_date-day">28</span> May,
                  2018
                </div>
              </div>
              <div className="blog__content-post_details">
                Allcidmin | 0 here is where the comment counter is
              </div>
              <p className="blog__content-post_paragraph-text">
                Plat problems: Surveyor tells county about problems with
                subdivision’s layout By Jamie Kelly editor@willistonherald.com
                May 16, 2018 on Williston Herald A subdivision in Williams
                County might need to be re-surveyed, and it isn’t clear who will
                need to bear the cost of that, the Williams County Commission
                heard Tuesday morning. Blake Sexton, a surveyor, told
              </p>
              <Link
                to="/plat-problems"
                className="blog__content-post_paragraph-link"
              >
                Read More
              </Link>
            </div>
            <div className="blog__content-post">
              <div className="blog__content-post_image">
                <Link
                  to="/adverse-possession"
                  className="blog__content-post_link"
                >
                  <img
                    src="https://allcountylandsurveyor.com/wp-content/uploads/2018/02/bews3.png"
                    className="blog__post-image"
                    alt="group of four construction workers"
                  />
                </Link>
              </div>
              <div className="blog__content-post_desc">
                <Link
                  to="/adverse-possession"
                  className="blog__content-post_link"
                >
                  <h2 className="blog__content-post_title">
                    New York’s Former Adverse Possession Law
                  </h2>
                </Link>
              </div>
              <div className="blog__content-post_date">
                <img
                  src={Calender}
                  className="blog__post-date_icon"
                  alt="calender"
                />
                <div className="blog__content-post_date-text">
                  <span className="blog__content-post_date-day">15</span>
                  Feb, 2018
                </div>
              </div>
              <div className="blog__content-post_details">
                Allcidmin | 0 here is where the comment counter is
              </div>
              <div className="blog__content-post_content">
                <p className="blog__content-post_paragraph-text">
                  Plat problems: Surveyor tells county about problems with
                  subdivision’s layout By Jamie Kelly editor@willistonherald.com
                  May 16, 2018 on Williston Herald A subdivision in Williams
                  County might need to be re-surveyed, and it isn’t clear who
                  will need to bear the cost of that, the Williams County
                  Commission heard Tuesday morning. Blake Sexton, a surveyor,
                  told
                </p>
                <Link
                  to="/adverse-possession"
                  className="blog__content-post_paragraph-link"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Blog;
