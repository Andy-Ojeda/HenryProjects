import React, { useEffect, useState } from 'react';
import style from './Project.module.css';
import Filters from '../../Components/Filters/Filters';

import { fetchAllProjects, fetchProjectById } from '../../Redux/Slices/viewProjectsSlice.js'
import { useDispatch, useSelector } from "react-redux";
import Card from '../../Components/Cards/Card';
import Nav from '../../Components/Nav/Nav';
import Menu from '../../Components/Menu/Menu.jsx';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { joinProject } from '../../Redux/Slices/JoinProjectSlice.js';


export default function Project() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {projectById} = useSelector((state) => state.viewProjects);
    console.log("PROJECT NAME...", projectById.name);
console.log("PROJECT Description...", projectById.description);
    const user= useSelector((state) => state.userLogin.user);
    const [loading, setLoading] = useState(true);

    const [projects, setProjects] = useState(null);

  
console.log("USERUSER:: ", user)
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


 // Obtiene el ID del proyecto de los parámetros de la URL
 const { id } = useParams();

useEffect(() => {
    const fetchData = async () => {
        try {
            
            const data = await dispatch(fetchProjectById(id))
            if(data){
                setLoading(false)
            }
            console.log(data)
        } catch (error) {
            console.error('Error fetching project details:', error.message)
        }
    }
    fetchData()
    
}, [dispatch,id ])

const handleJoinProject = () => {
    
    dispatch(joinProject(id))
}
  const handlerClose = () => {
    navigate("/home");
  }

  return (
        <div className={style.contALL}>
            <div className={style.contNav}>
                <Nav />
            </div>
            <div>
                        {loading? (
                            <p>Cargando detalle del proyecto</p>
                        ) : (
                           <>
                                <h2>{projectById.name}</h2>
                                <p>{projectById.description}</p>
                                <p>Creado por: {projectById.createdBy.name}</p>
                                <p>Participantes : {projectById.length}</p>

                                {/* {projectById.includes(user._id) ? (
                                    <p> Ya eres participante de este proyecto</p>
                                ) : (
                                    <button onClick={handleJoinProject}>Unirse</button>
                                )} */}
                           </> 
                        )}

                        {projectById && projectById.include(user._id)? (
                                    <p> Ya eres participante de este proyecto</p>
                                ) : (
                                    <button onClick={handleJoinProject}>Unirse</button>
                                )

                    
                        }



                    </div>
            <div className={style.contAll}>
                
                <div className={style.container}>
                    <div className={style.contAtras} onClick={handlerClose}>
                        <label>Back <FaArrowRightToBracket /></label>
                    </div>
                   


                </div>
                    

            </div>






        </div>

    
  )

}