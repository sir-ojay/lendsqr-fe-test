import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ButtonGreen from "../../components/buttons/buttongreen/buttonGreen";
import ButtonRed from "../../components/buttons/buttonred/buttonRed";
import UsarDetails from "../../components/users/userdetails/UserInfo";
import UserOverview from "../../components/users/useroverview/userOverview";
import "./userdetailspg.scss";
import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { personDetail } from "../../components/data/Data";
import { IUser } from "../../components/users/userdetails/UserType";


const UserDetails = () => {
const params = useParams();
console.log(params);
const [newUser, setNewRow] = useState<IUser>({});

useEffect(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    personDetail(params.id as string).then((data) => {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      setNewRow(data);
    });
  } else {
    let cacheUser = JSON.parse(user);
    if (cacheUser.id === params.id) {
      setNewRow(JSON.parse(user));
    } else {
      personDetail(params.id as string).then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        setNewRow(data);
      });
    }
  }
}, [params.id]);

   
  
  return (
    <>
      <Navbar />
      <div className="user--page">
        <Sidebar />

        <div className="user--Container">
          <div className="link">
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <GrLinkPrevious className="icon" />
              <span>Back to Users</span>
            </Link>
          </div>

          <div className="user--two--sided">
            <p className="user">User Details</p>

            <div className="buttons">
              <ButtonRed />
              <ButtonGreen />
            </div>
          </div>

          <UserOverview newUser={newUser} />
          <UsarDetails newUser={newUser} />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
