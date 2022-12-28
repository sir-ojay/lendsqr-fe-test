import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { IoMdArrowDropdown } from "react-icons/io";
import Picture from "../../assets/avatar.png";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <span>
            <SearchOutlinedIcon className="icon" />{" "}
          </span>
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
