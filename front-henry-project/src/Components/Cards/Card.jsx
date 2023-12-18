import React, { useEffect, useState } from 'react'
import style from './Card.module.css';




export default function Card(projects) {

    const [datos, setDatos] = useState(null);


  useEffect(()=>{
    console.log("AllProjects: ", projects.projects);
    setDatos(projects.projects);
  },[projects])


  return (
    <div className={style.contALL}>
        {datos && datos.name && <h3>{datos.name}</h3>}
        {datos && datos.description && <p>{datos.description}</p>}

        <div className={style.contTechnologies}>
            {datos && datos.technologies && datos.technologies.CSS === true && <h5>CSS</h5>}
            {datos && datos.technologies && datos.technologies.HTML === true && <h5>HTML</h5>}
            {datos && datos.technologies && datos.technologies.JavaScript === true && <h5>JavaScript</h5>}
            {datos && datos.technologies && datos.technologies.NodeJS === true && <h5>NodeJS</h5>}
            {datos && datos.technologies && datos.technologies.React === true && <h5>ReactJS</h5>}
        </div>



    </div>
  )
}
