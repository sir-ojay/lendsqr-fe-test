import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ButtonGreen from "../../components/buttons/buttongreen/buttonGreen";
import ButtonRed from "../../components/buttons/buttonred/buttonRed";
import UsarDetails from "../../components/users/userdetails/UsarDetails";
import UserOverview from "../../components/users/useroverview/userOverview";
import "./userdetailspg.scss";
import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";

const UserDetails = () => {
  return (
    <div className="user--page">
      <Sidebar />

      <div className="user--Container">
        <Navbar />

        <div className="link">
          <Link to="/dashboard" style={{textDecoration: 'none'}}>                
            <GrLinkPrevious className="icon" />
            <span>Back to Users</span>
          </Link>
        </div>

        <div className="user--two--sided">
          <p className="user">User Details</p>

          <div className="buttons">
            <ButtonRed className="button--red" />
            <ButtonGreen className="button--red"  />
          </div>
        </div>
    
          <UserOverview />
          <UsarDetails />
      </div>
    </div>
  );
};

export default UserDetails;
