import React from 'react'
import style from './Nav.module.css'
import Logo from '../../assets/HenryExp.png'

export default function Nav() {
  return (
    <div className={style.contALL}>
        <div className={style.contLogo}>
            <img src={Logo} alt="" />
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
