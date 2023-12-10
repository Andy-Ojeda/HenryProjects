/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import style from "./Landing.module.css";
import Login from "../../Login/Login";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <img src={Logo} alt="" />
      <h1>Henry Experience</h1>
      <button className={style.button2} onClick={() => navigate("/home")}>
        HOME
      </button>
      <Login />
    </>
  );
}
