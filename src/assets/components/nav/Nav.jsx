import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href ="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href ="#Skill"
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portofolio"
        onClick={() => setActiveNav("#portofolio")}
        className={activeNav === "#portofolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;


// import React, { useState } from "react";
// import "./nav.css";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("");

//   return (
//     <nav>
//       <Link
//         to="/"
//         onClick={() => setActiveNav("")}
//         className={activeNav === "" ? "active" : ""}
//       >
//         <AiOutlineHome />
//       </Link>
//       <Link
//         to="/NoPage"
//         onClick={() => setActiveNav("NoPage")}
//         className={activeNav === "NoPage" ? "active" : ""}
//       >
//         <AiOutlineUser />
//       </Link>
//       <Link
//         to="/experience"
//         onClick={() => setActiveNav("experience")}
//         className={activeNav === "experience" ? "active" : ""}
//       >
//         <BiBook />
//       </Link>
//       <Link
//         to="/portofolio"
//         onClick={() => setActiveNav("portofolio")}
//         className={activeNav === "portofolio" ? "active" : ""}
//       >
//         <AiOutlineFundProjectionScreen />
//       </Link>
//       <Link
//         to="/contact"
//         onClick={() => setActiveNav("contact")}
//         className={activeNav === "contact" ? "active" : ""}
//       >
//         <BiMessageSquareDetail />
//       </Link>
//     </nav>
//   );
// };

// export default Nav;

