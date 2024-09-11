import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main app__section">
      <>
        <h1 className="main__title">
          Looking for a professional land surveyor?
        </h1>
        <h2 className="main__subtext">
          Are you in need of a NY land surveyor for all of your land surveying
          needs? If so, you’ve come to the right place! Here at All County Land
          Surveying, we have the tools and experience to complete any and all
          jobs you have. With more than 40 years of combined land surveying
          experience, no job is too challenging. Our services extend far past
          the boundaries of the 5 boroughs. With a new Western NY Branch
        </h2>
        <span>
          <Link to="">
            <p>Read more</p>
          </Link>
        </span>
      </>
    </main>
  );
}

export default Main;
