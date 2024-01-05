import React, { useEffect, useState } from 'react'
import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';



export default function Card(projects) {

    const navigate = useNavigate();

    const [datos, setDatos] = useState(null);
    const [descriptionLimited, setDescriptionLimited] = useState(null);

  useEffect(()=>{
    // console.log("AllProjects: ", projects.projects);
    setDatos(projects.projects);
  },[projects])

  const handleClick = () => {
      navigate(`/project/${datos._id}`, { replace: true });
      // navigate("/project", { replace: true });
  }

  useEffect(()=>{
    if (datos) {
      const descripcion = datos.description;
      setDescriptionLimited(descripcion.slice(0, 100));
    }
  },[datos])

  return (
    // <div className={style.contALL} onClick={handleClick}>
      <div className={style.card} onClick={handleClick}>
        <div className={style.cardDetails}>
            {datos && datos.name && <h3>{datos.name}</h3>}
            {datos && datos.description && <p>{`${descriptionLimited} ...`}</p>}

            <div className={style.contTechnologies}>
                {datos && datos.technologies && datos.technologies.CSS === true && <h5>CSS</h5>}
                {datos && datos.technologies && datos.technologies.HTML === true && <h5>HTML</h5>}
                {datos && datos.technologies && datos.technologies.JavaScript === true && <h5>JavaScript</h5>}
                {datos && datos.technologies && datos.technologies.NodeJS === true && <h5>NodeJS</h5>}
                {datos && datos.technologies && datos.technologies.React === true && <h5>ReactJS</h5>}
            </div>
        </div>
        


      </div>

    // </div>
  )
}
