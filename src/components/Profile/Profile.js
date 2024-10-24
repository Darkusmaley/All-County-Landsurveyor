import "./Profile.css";
import Header from "../Header/Header";
import ProfileSidebar from "../Profile SideBar/ProfileSidebar";

function Profile() {
  return (
    <section className="Profile app__section">
      <Header />
      <>
        <div className="profile">
          <ProfileSidebar />
        </div>
      </>
    </section>
  );
}

export default Profile;
