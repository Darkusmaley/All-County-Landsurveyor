import "./Services.css";
import Header from "../Header/Header";

function Services() {
  return (
    <section className="services app__section">
      <Header />
      <>
        <div className="services__title">
          <h1 className="services__title-text">Services</h1>
        </div>
        <ul className="services__list">
          <li className="services__service">
            <span className="services__service-title">
              ALTA/NSPS Title Survey
            </span>
            An ALTA/NSPS Land Title Survey is a boundary survey that complies
            with the standards of the American Land Title Association (ALTA),
            and the National Society of Professional Surveyors, Inc. (NSPS), the
            legal successor organization to the American Congress on Surveying
            and Mapping (ACSM). This type of survey is generally required by
            title insurance companies and banking institutions. Click here to
            learn more. For an accurate quote, fill out the Table A/Minimum
            Standard Detail Requirements For ALTA/NSPS Land Title Surveys Form
            and email to info@allcountylandsurveyor.com
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Architectural Survey
            </span>
            An Architectural Survey, also known as a Topographical Survey, is a
            survey used by architects, engineers, contractors or municipalities
            for design and construction purposes. It is a boundary survey which
            may include elevations at specific points, contour lines, dimensions
            of existing structures, and visible utility locations on the
            property and in the street. Not all architectural surveys are alike,
            so it is important to have your architect or the professional
            helping you on your project, contact us directly so that we know
            exactly what is needed on the survey.
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Building Information Management
            </span>
            {/* ask for info  */}
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Construction Services
            </span>
            Let us bring your construction plans to life and avoid future
            problems and costs later. From the initial designs and plans to the
            final certificate of occupancy, a series of construction surveys are
            a must. Architectural/Topographical Survey: A detailed survey of the
            premises generally includes elevations, surface and subsurface
            utilities, tree, waterway, and setback information and will be an
            invaluable help to your architect and engineers. Construction
            Layout: Our team will review your construction plans and mark the
            location of proposed construction projects and property corners on
            site. Layouts are useful for proposed foundations, buildings, walls,
            and fences. Foundation Location: A foundation location survey is
            used to verify the location of and elevation of a newly-poured
            foundation. Final/As-Built Survey: A final survey is conducted once
            the construction is completed and is used to finalize the permits
            and certificates of occupancy with the local municipality.
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Elevation Certificate
            </span>
            Print, Fill Out, then Scan and Email to
            info@allcountylandsurveyor.com or Fax to 718-353-0938  An Elevation
            Certificate (EC) is a document that is prepared and completed by a
            licensed Land Surveyor or Engineer, which compares the elevations
            throughout the property to the flood zones and base flood elevation
            set up by FEMA. This is used by flood insurance companies to
            determine one’s flood insurance rate. For more information on
            Elevation Certificates, click here to learn more.
            {/* this is a certificate. change to either main or about */}
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Boundary/Title Survey
            </span>
            A Boundary/Title Survey locates the boundaries of a property and the
            extent of ownership. It will also identify property encroachments,
            easements, and right-of-ways. A scaled map/plat is prepared based on
            field work conducted by measuring features on the property such as
            buildings, walls, fences, structures, driveways, pools, and other
            improvements.
          </li>
          <li className="services__service">
            <span className="services__service-title">
              High-Definition Scanning
            </span>
            Technology is ever growing and professions need to do the same. That
            is why All County Land Surveyor is using 3D Scanning technologies to
            not only improve accuracies of Land Surveying methods, but to
            produce products that could have never been imagined 20 years ago.
            Utilizing the latest Leica brand equipment, point clouds of data
            from scanning the surfaces of objects are used to create spatial
            representations of residential houses to commercial buildings, like
            warehouses and storage spaces. Our 3D Laser Scanner also captures
            360 degrees of imaging while scanning. With this in mind, we offer
            the service of creating floor plans, and producing a
            three-dimensional map that can be viewed on a computer. Technology
            is rapidly evolving and surveyors need to do the same. That’s why we
            are integrating 3D Scanning technologies not only to improve the
            accuracy and precision for land surveying applications, but to also
            offer new and unique geospatial services. Using the latest Leica
            brand equipment, “point clouds” of high-resolution spatial data are
            generated from scanning the surfaces of objects and areas which are
            used to create spatial representations for a variety of
            applications. Applications include: -Three-dimensional floor plans
            -As-Built Surveys: Capture every detail with exact dimensions and
            locations, for design, fabrication, construction and renovation
            planning. -Scan to Plan: Convert your point cloud data into 2D CAD
            drawings for the most accurate and precise building plans. -3D
            Modeling for smaller projects or Building Information Modeling (BIM)
          </li>
          <li className="services__service">
            <span className="services__service-title">
              Certificate of Occupancy Survey
            </span>
            A Certificate of Occupancy Survey or an As-Built survey is required
            by municipal regulation and building code for most exterior projects
            such as the construction of pools, decks, patios, fences, HVAC or
            generator installation, building extensions and more. The survey
            shows the as-built conditions in relation to the approved plans.
          </li>
        </ul>
      </>
    </section>
  );
}

export default Services;
