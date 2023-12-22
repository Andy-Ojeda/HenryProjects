import React, { useEffect, useState } from "react";
import style from "./Admin.module.css";
import Nav from "../../Components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProjects, fetchProjectById} from "../../redux/Slices/viewProjectsSlice";
import Logo from "../../assets/descarga.jpg";
import { fetchAllUsers } from "../../redux/Slices/viewUserSlice";
import PopupProject from "../../Components/PopupProject/PopupProject";

/* Que puede hacer el Admin 
1- Ver todos los Proyecto 
a. Los que estan activos
b. Los que estan finalizados

2- Ver a todos los Usuarios

3- Puede sacar Colaboradores de un proyecto

4- Puede Eliminar un proyecto
*/

const Admin = () => {
  const [showProject, setShowProject] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showProjectActive, setShowProjectActive] = useState(false);
  const [showProjectFinish, setShowProjectFinish] = useState(false);
  const [showPopupProject, setShowPopupProject] = useState(false)
  const [showPopupUser, setShowPopupUser] = useState(false)
  const [currentProject, setCurrentProject] = useState([]);

  const allProject = useSelector((state) => state.viewProjects.projects);
  const allUsers = useSelector((state) => state.viewUsers.usersAdmin);
  const dispatch = useDispatch();

  const handlerProjectsAdmin = () => {
    setCurrentProject(allProject);
    setShowProject(true);
    setShowUsers(false);
    setShowProjectActive(false);
    setShowProjectFinish(false);
  };

  const handlerUsersAdmin = () => {
    dispatch(fetchAllUsers());
    setShowProject(false);
    setShowUsers(true);
    setShowProjectActive(false);
    setShowProjectFinish(false);
  };

  const handlerProjectsAdminActive = async () => {
    const result = allProject.filter((project) => project.active === true);
    setShowProjectActive(true);
    setShowProjectFinish(false);
    setShowProject(false);
    setShowUsers(false);
    setCurrentProject(result);
  };

  const handlerProjectsAdminFinish = () => {
    const result = allProject.filter((project) => project.active === false);
    setShowProjectActive(false);
    setShowProjectFinish(true);
    setShowProject(false);
    setShowUsers(false);
    setCurrentProject(result);
  };

  const handlerProjectAdmin = async (e) => {
    const id = e.currentTarget.id
    await dispatch(fetchProjectById(id))
    setShowPopupProject(true)
  }

  useEffect(() => {
    dispatch(fetchAllProjects());
    dispatch(fetchAllUsers());
  }, [showPopupProject]);

  return (
    <>
      <div className={style.container}>
        <Nav />
        <div className={style.containerAdmin}>
          <div className={style.containerOptions}>
            <div>
              <h3 className={(showProject || showProjectActive || showProjectFinish) ? style.optionProjectSelect : style.option} onClick={handlerProjectsAdmin}>
                Proyectos
              </h3>
              {(showProject || showProjectActive || showProjectFinish) && (
                <ul className={style.optionUl}>
                  <li
                    onClick={handlerProjectsAdminActive}
                    className={showProjectActive ? style.projectActive : style.projectActiveNull}
                  >
                    Proyectos Activos
                  </li>
                  <li
                    onClick={handlerProjectsAdminFinish}
                    className={showProjectFinish ? style.projectFinish : style.projectFinishNull}
                  >
                    Proyectos Finalizados
                  </li>
                </ul>
              )}
            </div>
            <div>
              <h3 className={showUsers? style.optionUserSelect : style.option} onClick={handlerUsersAdmin}>
                Usuarios
              </h3>
            </div>
          </div>
          <div className={style.containerViewsOptions}>
            <div className={style.containerViewsOptionsTitle}>
              {showProject && !showProjectActive && !showProjectFinish && (
                <h3 className={style.title}>Todos los Proyectos</h3>
              )}
              {showUsers && <h3 className={style.title}>Todos los Usuarios</h3>}
              {showProjectActive && (
                <h3 className={style.title}>Proyectos Activos</h3>
              )}
              {showProjectFinish && (
                <h3 className={style.title}>Proyectos Finalizados</h3>
              )}
            </div>
            <div className={style.containerViewsOptionsText}>
              {(showProject || showProjectActive || showProjectFinish) && (
                <>
                  {currentProject?.map((project) => (
                    <div key={project._id} id={project._id} className={style.containerProject} onClick={handlerProjectAdmin}>
                      <div className={style.containerImage}>
                        <img src={Logo} alt="Imagen del Proyecto" />
                      </div>
                      <div id={project._id} className={style.containerName}>
                        <h3>{project.name}</h3>
                      </div>
                      <div className={style.containerTechnologies}>
                        {project.technologies &&
                          project.technologies.HTML === true && <h3>HTML</h3>}

                        {project.technologies &&
                          project.technologies.CSS === true && <h3>CSS</h3>}

                        {project.technologies &&
                          project.technologies.JavaScript === true && (
                            <h3>JavaScript</h3>
                          )}

                        {project.technologies &&
                          project.technologies.NodeJS === true && (
                            <h3>NodeJS</h3>
                          )}

                        {project.technologies &&
                          project.technologies.React === true && <h3>React</h3>}
                      </div>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </>
              )}
              {showUsers &&
                allUsers.map((user) => (
                  <div className={style.containerUsers}>
                    <div className={style.containerImage}>
                      <img src={user.image} alt="" />
                    </div>
                    <div className={style.containerName}>
                      <h3>{user.userName}</h3>
                    </div>
                    <div className={style.containerEmail}>
                      <h3>{user.email}</h3>
                    </div>
                    <div className={style.containerTechnologies}>
                      {user.technologies.map((tech) => (
                        <h3>{tech}</h3>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {
          showPopupProject && (
            <PopupProject showPopupProject={showPopupProject} setShowPopupProject={setShowPopupProject}/>
          )
        }
      </div>
    </>
  );
};

export default Admin;
