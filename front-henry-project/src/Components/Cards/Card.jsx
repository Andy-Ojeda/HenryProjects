import React, { useEffect, useState } from 'react'
import style from './Card.module.css';




export default function Card(projects) {

    const [datos, setDatos] = useState(null);


  useEffect(()=>{
    console.log("AllProjects: ", projects.projects.name);
    setDatos(projects.projects.name);
  },[projects])


  return (
    <div className={style.contALL}>
        <h3>- Y yo una Card 💛 -</h3>
        <h3>{datos}</h3>
    </div>
  )
}
