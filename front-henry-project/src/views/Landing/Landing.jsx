import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import style from './Landing.module.css'


export default function Landing() {
  
  const navigate = useNavigate();
  
  
  
    return (
        <>
            <div className={style.containerAll}>
                <img src={Logo} alt="" />
                    <h1>Henry Projects</h1>
                <button className={style.button2} onClick={()=> navigate('/home')}>HOME</button>

            </div>
        
        </>
    )




}
