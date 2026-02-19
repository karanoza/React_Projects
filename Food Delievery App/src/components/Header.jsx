import { LOGO_URL } from "../utils/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [btnName, setBtnName] = useState("LogIn");
  console.log("header aagyaa");
  const onlineStatus = useOnlineStatus();
  

  // Function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li
            className={`nav-item home-item ${isActive("/") ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            🏠 Home
          </li>
          <li
            className={`nav-item about-item ${
              isActive("/about") ? "active" : ""
            }`}
            onClick={() => navigate("/about")}
          >
            ℹ️ About Us
          </li>
          <li
            className={`nav-item contact-item ${
              isActive("/contact") ? "active" : ""
            }`}
            onClick={() => navigate("/contact")}
          >
            📞 Contact Us
          </li>
          <li  className={`nav-item contact-item ${
              isActive("/cart") ? "active" : ""
            }`}
            onClick={() => navigate("/cart")}>🛒 Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
            console.log(btnName);
          }}
        >
          {onlineStatus ? "🟢" : "🔴"} 🔐 {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
