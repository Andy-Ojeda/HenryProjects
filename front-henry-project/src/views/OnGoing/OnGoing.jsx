import React from 'react'
import style from './OnGoing.module.css';
import { useEffect, useState } from 'react';

import { fetchAllProjects } from '../../Redux/Slices/viewProjectsSlice.js';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../Components/Cards/Card';
import Nav from '../../Components/Nav/Nav';
import Menu from '../../Components/Menu/Menu.jsx';
import Filters from '../../Components/Filters/Filters';

export default function OnGoing() {


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
            <div className={style.contNav}>
                <Nav />
            </div>
            
            <div className={style.contAll}>
                <div className={style.contMenu}>
                    <Menu />
                </div>
                <div className={style.container}>
                    <div className={style.contFilters}>
                      <Filters />
                    </div>
                    
                    
                    <div className={style.content}>
                        {
                            projects && projects.map((pro, id) => pro.state==="onGoing" && <Card projects={pro} key={id}/> ) 
                                
                            
                        }
                    </div>



                </div>
                    

            </div>






        </div>

  )
}
