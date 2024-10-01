import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import NeedASurvey from "./components/BlogPages/NeedASurvey";
import { Route, Routes } from "react-router-dom";
import CanYouOrder from "./components/BlogPages/CanYouOrder";
import PlatProblems from "./components/BlogPages/PlatProblems";
import AdversePossession from "./components/BlogPages/AdversePossesion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/need-a-survey" element={<NeedASurvey />}></Route>
        <Route exact path="/can-you-order" element={<CanYouOrder />}></Route>
        <Route exact path="/plat-problems" element={<PlatProblems />}></Route>
        <Route
          exact
          path="/adverse-possession"
          element={<AdversePossession />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
