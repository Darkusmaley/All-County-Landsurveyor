import "./blogPages.css";
import MobileView from "../Mobile view/MobileView";
import { useEffect, useState } from "react";

function CanYouOrder({ handleMobileModal }) {
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
          <div className="blog__crossbar"></div>
          <div className="article">
            <h2 className="article__title">
              Can You Order a Survey in the Winter?
            </h2>
            <img
              src="https://allcountylandsurveyor.com/wp-content/uploads/2023/02/photo_2023-01-06_15-23-27-e1675813398968.jpg"
              className="blog__post-image"
              alt="surveyer on balconey"
            />
            <p className="article__desc">
              Whether you’re a homeowner or an enterprise level client, getting
              a survey done in the winter can seem like an impossible task.
              While most people have difficulty driving to work during a dusting
              of snow, land surveyors are expected to complete jobs that can
              range from the average home to acres of farmland. So this brings
              up the question, is it worth it to order a survey in the middle of
              winter? While land surveyors can run into issues surveying during
              the winter, there are many workarounds. The right company will
              always find a way to get the job done for you. Here are some
              common obstacles land surveyors run into during the winter and how
              they work around them.
            </p>
            <p className="article__desc">
              <h3 className="article__desc-header">Low Visibility </h3>
              For any land surveyor, no matter what tool they’re using, being
              able to see what’s in front of you is vital. Whether they’re
              collecting direct measurements around a house or utilizing a total
              station, seeing what you’re measuring is absolutely necessary.
              Snowfall is one of the obstacles that would slow down a job the
              most. Snow can actually stop a total station from processing
              measurements. All this does though is slow down the job. For any
              persistent land surveyor, snowfall is just another element that
              disrupts the job.
            </p>
            <p className="article__desc">
              <h3 className="article__desc-header">
                Locating Pertinent Information
              </h3>
              While snowfall can slow down a job, most people would think snow
              on the ground would be even more disruptive. This stops a land
              surveyor from locating things like sidewalks, pavers, low curbs
              and other important things to include in a survey. Some surveyors
              would see this as a reason to postpone a job, but this shouldn’t
              stop most. Every great surveyor makes sure to include the tools
              required for any and all jobs in their work vehicle. This includes
              a snow shovel, an ice pick and anything else that can help to
              locate important information.
            </p>
            <p className="article__desc">
              <h3 className="article__desc-header">Frigid Cold</h3>The one
              variable that is constant in any land surveying job is the
              surveyor. Without the land surveyor, the job cannot be completed.
              Surveying is not an easy job for most people, and one reason
              that’s the case are the elements, and this includes single digit
              weather. While most people stay home during a winter weather
              advisory, you’ll find a land surveyor in the snow locating
              monuments. While skiers dress warmly a couple of times during the
              winter, a professional land surveyor will layer every single
              morning to make sure they can endure the coldest of climates for 8
              to 12 hours.
            </p>

            <p className="article__desc">
              <h3 className="article__desc-header">Nothing Gets in the Way</h3>
              With all of that being said, a professional land surveyor that you
              can rely on will be there no matter how poor the temperature is.
              So don’t hesitate to call if you’re in need of a winter job that
              requires a quick turn around. All County Land Surveyor will be
              there for you no matter what the conditions! Call us today!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="blog__crossbar"></div>
          <div className="article">
            <h2 className="article__title">
              Can You Order a Survey in the Winter?
            </h2>
            <img
              src="https://allcountylandsurveyor.com/wp-content/uploads/2023/02/photo_2023-01-06_15-23-27-e1675813398968.jpg"
              className="blog__post-image"
              alt="surveyer on balconey"
            />
            <p className="article__desc">
              Whether you’re a homeowner or an enterprise level client, getting
              a survey done in the winter can seem like an impossible task.
              While most people have difficulty driving to work during a dusting
              of snow, land surveyors are expected to complete jobs that can
              range from the average home to acres of farmland. So this brings
              up the question, is it worth it to order a survey in the middle of
              winter? While land surveyors can run into issues surveying during
              the winter, there are many workarounds. The right company will
              always find a way to get the job done for you. Here are some
              common obstacles land surveyors run into during the winter and how
              they work around them.
            </p>
            <h3 className="article__desc-header">Low Visibility </h3>
            <p className="article__desc">
              For any land surveyor, no matter what tool they’re using, being
              able to see what’s in front of you is vital. Whether they’re
              collecting direct measurements around a house or utilizing a total
              station, seeing what you’re measuring is absolutely necessary.
              Snowfall is one of the obstacles that would slow down a job the
              most. Snow can actually stop a total station from processing
              measurements. All this does though is slow down the job. For any
              persistent land surveyor, snowfall is just another element that
              disrupts the job.
            </p>
            <h3 className="article__desc-header">
              Locating Pertinent Information
            </h3>
            <p className="article__desc">
              While snowfall can slow down a job, most people would think snow
              on the ground would be even more disruptive. This stops a land
              surveyor from locating things like sidewalks, pavers, low curbs
              and other important things to include in a survey. Some surveyors
              would see this as a reason to postpone a job, but this shouldn’t
              stop most. Every great surveyor makes sure to include the tools
              required for any and all jobs in their work vehicle. This includes
              a snow shovel, an ice pick and anything else that can help to
              locate important information.
            </p>
            <h3 className="article__desc-header">Frigid Cold</h3>
            <p className="article__desc">
              The one variable that is constant in any land surveying job is the
              surveyor. Without the land surveyor, the job cannot be completed.
              Surveying is not an easy job for most people, and one reason
              that’s the case are the elements, and this includes single digit
              weather. While most people stay home during a winter weather
              advisory, you’ll find a land surveyor in the snow locating
              monuments. While skiers dress warmly a couple of times during the
              winter, a professional land surveyor will layer every single
              morning to make sure they can endure the coldest of climates for 8
              to 12 hours.
            </p>
            <h3 className="article__desc-header">Nothing Gets in the Way</h3>{" "}
            <p className="article__desc">
              With all of that being said, a professional land surveyor that you
              can rely on will be there no matter how poor the temperature is.
              So don’t hesitate to call if you’re in need of a winter job that
              requires a quick turn around. All County Land Surveyor will be
              there for you no matter what the conditions! Call us today!
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default CanYouOrder;
