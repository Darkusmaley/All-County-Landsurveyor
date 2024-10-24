import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Profile from "./components/Profile/Profile";
import Blog from "./components/Blog/Blog";
import NeedASurvey from "./components/BlogPages/NeedASurvey";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CanYouOrder from "./components/BlogPages/CanYouOrder";
import PlatProblems from "./components/BlogPages/PlatProblems";
import AdversePossession from "./components/BlogPages/AdversePossesion";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  //states go here
  const [currentUser, setCurrentUser] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setLogin] = useState(false);

  // functions go here
  // const loginUser = (user) => {
  //   setIsLoading(true);
  //   const makeRequest = () => {
  //     return authorizeUser(user).then((res) => {
  //       localStorage.setItem("jwt", res.token);

  //       return checkLoggedIn(res.user);
  //     });
  //   };
  //   handleSubmit(makeRequest);
  // };

  // const registerUser = (values) => {
  //   register(values)
  //     .then((user) => {
  //       loginUser(user);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // const updateUser = (user) => {
  //   const jwt = localStorage.getItem("jwt");
  //   const makeRequest = () => {
  //     return update(user, jwt).then((res) => {
  //       setCurrentUser(res);
  //     });
  //   };
  //   handleSubmit(makeRequest);
  // };

  // const logoutUser = () => {
  //   localStorage.removeItem("jwt");
  //   setCurrentUser({});
  //   setLogin(false);
  //   history.push("/");
  // };

  // useeffcts here

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     checkLoggedIn(jwt)
  //       .then(() => {
  //         getUserData(jwt)
  //           .then((res) => {
  //             setCurrentUser(res.user);
  //           })
  //           .catch((err) => {
  //             if (err.response && err.response.status === 401) {
  //               console.error("Token expired or invalid. Logging out...");
  //               logoutUser();
  //             } else {
  //               console.error("Error fetching user data:", err);
  //             }
  //           });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/need-a-survey" element={<NeedASurvey />}></Route>
          <Route exact path="/can-you-order" element={<CanYouOrder />}></Route>
          <Route exact path="/plat-problems" element={<PlatProblems />}></Route>
          <Route
            exact
            path="/adverse-possession"
            element={<AdversePossession />}
          ></Route>

          {/* protected routes */}
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
