import React, { useEffect, useState } from "react";
import style from "./Project.module.css";
import Filters from "../../Components/Filters/Filters";

import {
  fetchAllProjects,
  fetchProjectById,
} from "../../Redux/Slices/viewProjectsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Cards/Card";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu.jsx";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { joinProject } from "../../Redux/Slices/JoinProjectSlice.js";

export default function Project() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { projectById } = useSelector((state) => state.viewProjects);

  console.log("PROJECTbyID...", projectById);
  console.log("PROJECT NAME...", projectById.name);
  console.log("PROJECT Description...", projectById.description);
  const user = useSelector((state) => state.userLogin);
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState(null);

  console.log("USERUSER:: ", user);
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
  console.log("ID: ", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(fetchProjectById(id));
        if (data) {
          setLoading(false);
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching project details:", error.message);
      }
    };
    fetchData();
  }, [dispatch, id]);

  const handleJoinProject = () => {
    dispatch(joinProject(id));
  };
  const handlerClose = () => {
    navigate("/home");
  };

  return (
    <div className={style.contALL}>
      <div className={style.contNav}>
        <Nav />
      </div>

      <div className={style.contAll}>
        <div className={style.container}>
          <div className={style.contAtras} onClick={handlerClose}>
            <label>
              Back <FaArrowRightToBracket />
            </label>
          </div>
          <div className={style.contCard}>
            {loading ? (
              <p>Cargando detalle del proyecto</p>
            ) : (
              <>
                <div className={style.contTitulo}>
                  <h2>{projectById.name}</h2>
                  <div className={style.contP}>
                    <p>
                      Creado por: <label>{projectById.createdBy.name}</label>
                    </p>
                    <p>
                      Participantes : <label>{projectById.length}</label>
                    </p>
                  </div>
                </div>

                {user && user._id && <h3>Debes Registrarte</h3>}

                <div className={style.contDescription}>
                  <p>{projectById.description}</p>
                </div>

                <div className={style.contButton}>
                  {projectById &&
                  projectById.participants.includes(user._id) ? (
                    <p> Ya eres participante de este proyecto</p>
                  ) : (
                    <button
                      className={style.button}
                      onClick={handleJoinProject}
                    >
                      Unirse
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
