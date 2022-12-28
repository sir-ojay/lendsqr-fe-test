import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Tablue from "../../components/table/Tablue";
import Tabluex from "../../components/table/Tableux";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="user">
          <p>Users</p>
        </div>

        <div className="widgets">
          <Widget type="users" />
          <Widget type="active--user" />
          <Widget type="users-with--loans" />
          <Widget type="users--with--savings" />
        </div>

        <div className="listContainer">
          <div className="listTitle"></div>
          <Tabluex />
        </div>
      </div>
    </div>
  );
};

export default Home;
