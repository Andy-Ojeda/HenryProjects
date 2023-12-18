/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/HEx.jpg";
import Hola from "../../assets/Hola.jpg";
import style from "./Landing.module.css";
import Login from "../../Components/Login/Login";



export default function Landing() {
  const navigate = useNavigate();


  return (
    <div className={style.contALL}>
        <div className={style.contLogo}>
            <img className={style.img} src={Logo} alt="" />
        </div>

        <h1 className={style.title}>Henry Experience</h1>
        
        <div className={style.contHola}>
          {/* <h2>hola!!</h2> */}
            <img className={style.hola} src={Hola} alt="" />     
        </div>

        <div className={style.contLogin}>
            <Login />
        </div>

    </div>
  );
}
