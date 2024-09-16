import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
