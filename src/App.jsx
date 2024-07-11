import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Board from "./features/Board/Board";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Sidebar from "./features/Navigation/components/Sidebar";
import "./app.style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="app">
          <div className="app-sidebar">
            <Sidebar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
