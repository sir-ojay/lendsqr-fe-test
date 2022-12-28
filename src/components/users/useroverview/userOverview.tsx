import React from "react";
import "./useroverview.scss";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const userOverview = () => {
  return (
    <div className="user--overview">
      <div className="account--details">
        <div className="icon--background">
          <AiOutlineUser className="icon" />
        </div>

        <div className="name">
          <p className="full--name">Grace Effiom</p>
          <p>LSQFf587g90</p>
        </div>

        <hr />

        <div className="tier">
          <p>User’s Tier</p>
          <AiFillStar className="full--star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
        </div>

        <hr />

        <div className="bank--details">
          <p className="money">₦200,000.00</p>
          <p>9912345678/Providus Bank</p>
        </div>
      </div>

      <div className="general--details">
        <p>General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </div>
  );
};

export default userOverview;
