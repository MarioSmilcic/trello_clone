import "./navigation.style.css";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <h4>TrelloClone</h4>
        </div>
        <div className="links">
          <Link to={{ pathname: "/" }}> Home</Link>
          <Link to={{ pathname: "/board" }}>Board</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/contact" }}>Contact</Link>
        </div>
      </div>
      {/* <Sidebar /> */}
    </>
  );
};

export default Navigation;
