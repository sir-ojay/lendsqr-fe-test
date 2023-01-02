import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Picture from "../../assets/avatar.png";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/lendsqr.png";
import Union from "../../assets/Union.png";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <Link to="/dashboard">
          <span className="logo">
            <img src={Union} alt="union" className="union--img" />
            <img src={Logo} alt="logoimg" className="logo--img" />
          </span>
        </Link>
      </div>
      <div className="mobile_nav">
        <FaBars />
      </div>
      <div className="wrapper">
        <div>
          <SearchBar />
        </div>

        <div className="items">
          <div className="item">
            <Link to="/dashboard">
              <span>Docs</span>
            </Link>
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img src={Picture} alt="/" className="avatar" />
          </div>
          <p>Adedeji</p>
          <div className="item">
            <IoMdArrowDropdown className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
