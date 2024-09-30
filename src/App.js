import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Need_a_survey from "./components/Blog Pages/need-a-survey";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/need-a-survey" element={<Need_a_survey />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
