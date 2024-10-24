import "./ProfileSidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function ProfileSidebar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profileSidebar app__section">
      <>
        <div className="sideBar">
          <h3 className="sidebar__username">{currentUser?.name} Sam</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-tab">
              <Link className="sidebar__list-tab_text" to="/payment">
                <h3>Payment</h3>
              </Link>
              <img src="" alt="" className="sidebar__list-tab_image" />
            </li>
            {/* <li className="sidebar__list-tab">
              <h3 className="sidebar__list-tab_text"></h3>
              <img src="" alt="" className="sidebar__list-tab_image" />
            </li> */}
          </ul>
        </div>
      </>
    </section>
  );
}

export default ProfileSidebar;
