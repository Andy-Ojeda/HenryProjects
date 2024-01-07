import React, { useEffect, useState } from 'react';
import style from './Done.module.css';
import Filters from '../../Components/Filters/Filters';

import { fetchAllProjects } from '../../Redux/Slices/viewProjectsSlice.js';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../Components/Cards/Card';
import Nav from '../../Components/Nav/Nav';
import Menu from '../../Components/Menu/Menu.jsx';


export default function Done() {

  const dispatch = useDispatch();

    const AllProjects = useSelector((state) => state.viewProjects.projects);
    const projectsFilter = useSelector((state) => state.viewProjects.projectsFilter);
    const viewFilter = useSelector((state) => state.viewProjects.viewFilter);
    
  

//   useEffect(()=>{
//       console.log("Estado GLOBAL...", AllProjects); 
//       setProjects(AllProjects);
//       console.log("Projects LOCAL: ", projects)
//   },[AllProjects])

//   useEffect(()=>{
//     console.log("STATEEEEE...", AllProjects);
//       console.log("Dentro del handleButton, dispatchando...");
//       dispatch(fetchAllProjects());
//   },[])

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
                    
                    {/* <div className={style.content}>
                        {
                            projects && projects.map((pro, id) => pro.state==="done" && <Card projects={pro} key={id}/> ) 
                        }
                    </div> */}


                    {viewFilter === false ? 
                        <div className={style.content}>
                            {
                                AllProjects ? AllProjects.map((pro, id) => pro.state==="done" && <Card projects={pro} key={id}/> ) 
                                            : <h4>Buscando...</h4>
                            }
                        </div>
                        :
                        <div className={style.content}>
                            {
                                projectsFilter ? projectsFilter.map((pro, id) => pro.state==="done" && <Card projects={pro} key={id}/> ) 
                                            : <h4 style={color="white"}>Buscando...</h4>
                            }
                        </div>
                    }



                </div>
                    

            </div>






        </div>

    
  )
}
