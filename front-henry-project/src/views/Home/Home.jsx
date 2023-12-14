import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Filters from '../../Components/Filters/Filters';

import { fetchAllProjects } from '../../redux/Slices/viewProjectsSlice';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../Components/Cards/Card';

export default function Home() {

  const dispatch = useDispatch();

  const AllProjects = useSelector((state) => state.viewProjects.projects);

  const [projects, setProjects] = useState(null);

  const handleButton = () =>{
    console.log("STATEEEEE...", AllProjects);
      console.log("Dentro del handleButton, dispatchando...");
      dispatch(fetchAllProjects());
  }

  useEffect(()=>{
      console.log("Estado GLOBAL...", AllProjects); 
      setProjects(AllProjects);
      console.log("Projects LOCAL: ", projects)
  },[AllProjects])



  return (
    <div className={style.contALL}>
        <div className={style.container}>
            <div>
              <Filters />
            </div>
        <h2>Hola, soy la Home 🧡</h2>
            <div className={style.content}>
                <button onClick={handleButton}>CLICK</button>
                <p>{projects && projects[0].name}</p>
                {
                    projects && projects.map((pro)=> <Card projects={pro}/> )
                    
                }

            </div>


            

        </div>





    </div>
  )
}
