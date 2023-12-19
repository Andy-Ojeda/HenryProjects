import React from 'react'
import style from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

export default function Menu() {

    const navigate = useNavigate();

    const handleButton = (goTo) => {
        console.log("APRETÉ... ", goTo);
        navigate(`/${goTo}`);
    }

  return (
    <div className={style.contMenu}>
        <div className={style.contTitle}>
            <h4>PROJECTS:</h4>
        </div>
        <div className={style.links}>
            <button onClick={()=>handleButton("home")}><span>To Do</span></button>
        </div>
        <div className={style.links}>
            <button onClick={()=>handleButton("ongoing")}><span>On Going</span></button>
        </div>
        <div className={style.links}>
            <button onClick={()=>handleButton("done")}><span>Done</span></button>
        </div>
        
    </div>
  )
}
