import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Filters from '../../Components/Filters/Filters';

import { fetchAllProjects } from '../../redux/Slices/viewProjectsSlice';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../Components/Cards/Card';
import Nav from '../../Components/Nav/Nav';

export default function Home() {

  const dispatch = useDispatch();

  const AllProjects = useSelector((state) => state.viewProjects.projects);

  const [projects, setProjects] = useState(null);

  

  useEffect(()=>{
      console.log("Estado GLOBAL...", AllProjects); 
      setProjects(AllProjects);
      console.log("Projects LOCAL: ", projects)
  },[AllProjects])

  useEffect(()=>{
    console.log("STATEEEEE...", AllProjects);
      console.log("Dentro del handleButton, dispatchando...");
      dispatch(fetchAllProjects());
  },[])

  return (
    <div className={style.contALL}>
      <Nav />
        <div className={style.container}>
            <div>
              <Filters />
            </div>
        <h2>Henry Experiens 💛</h2>
            <div className={style.content}>
                
                
                {
                    projects ? projects.map((pro)=> <Card projects={pro}/> ) : null
                    
                }

            </div>


            

        </div>





    </div>
  )
}
