import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Board from "./features/Board/Board";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import AgreementPage from "./features/AgreementPage/AgreementPage";
import NotificationContainer from "./components/Notification/NotificationContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agreement" element={<AgreementPage />} />
        </Routes>
        <NotificationContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
