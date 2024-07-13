// // import "../navigation.style.css";
// import "./sidebar.style.css";
// import { Link } from "react-router-dom";
// import ArrowLeft from "../../../components/icons/ArrowLeft";
// import ArrowRight from "../../../components/icons/ArrowRight";
// import { useState } from "react";

// const NavModal = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleCollapsedSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };
//   return (
//     <>
//       <div className="sidebar">
//         <div className="arrow-left">
//           <ArrowLeft handleClick={handleCollapsedSidebar} />
//         </div>

//         <div className="sidebarLinks">
//           <Link to={{ pathname: "/" }}> Home</Link>
//           <Link to={{ pathname: "/board" }}>Board</Link>
//           <Link to={{ pathname: "/about" }}>About</Link>
//           <Link to={{ pathname: "/contact" }}>Contact</Link>
//         </div>
//       </div>

//     </>
//   );
// };

// export default NavModal;
// import "../navigation.style.css";
import "./sidebar.style.css";
import { Link } from "react-router-dom";
import ArrowLeft from "../../../components/icons/ArrowLeft";
import ArrowRight from "../../../components/icons/ArrowRight";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapsedSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed && "collapsed"}`}>
        {!isCollapsed && (
          <div className="arrow-left">
            <ArrowLeft handleClick={handleCollapsedSidebar} />
          </div>
        )}
        {isCollapsed && (
          <div className="arrow-right">
            <ArrowRight handleClick={handleCollapsedSidebar} />{" "}
          </div>
        )}
        {!isCollapsed && (
          <div className="sidebarLinks">
            <Link to={{ pathname: "/" }}> Home</Link>
            <Link to={{ pathname: "/board" }}>Board</Link>
            <Link to={{ pathname: "/about" }}>About</Link>
            <Link to={{ pathname: "/contact" }}>Contact</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
