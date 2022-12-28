import React from "react";
import "./login.scss";
import { useState, useEffect } from "react";
import Image from "../../assets/pablo-sign-in 1.svg";
import Logo from "../../assets/lendsqr.png";
import Union from "../../assets/Union.png";

const Login = () => {
  const [formValid, setFormValid] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (form.email !== "" && form.password !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const error = document.getElementById("errorMessage");

  const submitForm = (e) => {
    e.preventDefault();
    if (formValid === true) {
      setData({
        ...form,
      });
      sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));
      console.log(data);
      error.textContent = "";
      window.location = "/dashboard";
    } else {
      error.style.color = "red";
      error.textContent = "Enter your details";
    }
  };

  return (
    <div className="login--page">
      <div className="logo--body">
        <div className="logo">
          <img src={Union} alt="union" className="union--img" />
          <img src={Logo} alt="logoimg" className="logo--img" />
        </div>
        <div className="login--img">
          <img src={Image} alt="login-imag" />
        </div>
      </div>

      <div className="form--wrapper">
        <h1>Welcome! </h1>
        <p>Enter details to login.</p>

        <form className="login--form" onSubmit={submitForm}>
          <div id="errorMessage"></div>

          <div className="email--wrapper">
            <input
              type="email"
              name="email"
              maxLength={40}
              minLength={10}
              className="formField"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="password--wrapper">
            <input
              type="password"
              className="formField"
              placeholder="Password"
              maxLength={50}
              minLength={5}
              name="password"
              id="passwordBox"
              onChange={handleChange}
            />
            <p>show</p>
          </div>

          <p>forgot password?</p>
          <div className="submit">
            <input type="submit" value="LOG IN" id="submitButton" />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
