import React from 'react'
import style from './Nav.module.css'
import Logo from '../../assets/HenryExp.png'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate();
  
  return (
    <div className={style.contALL}>
        <div className={style.contLogo}>
            <img src={Logo} alt="" onClick={()=>navigate("/")} />
        </div>
        <div className={style.contTitle}>
            <h2>🖤 Henry Experiens 🖤</h2>
        </div>
        <div className={style.contUser}>
            <h4>User</h4>
        </div>
    </div>
  )
}
