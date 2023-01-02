import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tabluex from "../../components/table/Tableux";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
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
    </>
  );
};

export default Home;
