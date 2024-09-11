import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Main() {
  return (
    <main className="main app__section">
      <Header />
      <>
        <div>
          <h1 className="main__title">
            Looking for a professional land surveyor?
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
        </div>

        <div className="surveying-services">
          <h2 className="surveying-services__title">Our Surveying Services</h2>
        </div>
      </>
    </main>
  );
}

export default Main;
