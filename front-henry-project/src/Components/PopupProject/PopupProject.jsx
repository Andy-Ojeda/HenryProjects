import React from "react";
import style from "./PopupProject.module.css";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../../Redux/Slices/viewProjectsSlice";
import Logo from "../../assets/descarga.jpg";

const PopupProject = ({ showPopupProject, setShowPopupProject }) => {
  const projectById = useSelector((state) => state.viewProjects.projectById);
  const dispatch = useDispatch();

  const handlerShowPopUp = async () => {
    await dispatch(getProjectById({}));
    setShowPopupProject(false);
  };

  console.log(projectById);

  return (
    <div className={style.containerPopupProject}>
      <div className={style.popupProject}>
        <IoCloseCircle
          className={style.closePopup}
          onClick={handlerShowPopUp}
        />
        <div>
          <img src={Logo} alt="Imagen del Proyecto" className={style.imagePopupProjet}/>
        </div>
        <div>
          <h2 className={style.namePopupProjet}>{projectById.name}</h2>
        </div>
        <div>
          <p>{projectById.description}</p>
        </div>
        <div className={style.containerTech}>
          {projectById.technologies &&
          projectById.technologies.HTML === true ? (
            <h3>HTML</h3>
          ) : null}
          {projectById.technologies && projectById.technologies.CSS === true ? (
            <h3>CSS</h3>
          ) : null}
          {projectById.technologies &&
          projectById.technologies.JavaScript === true ? (
            <h3>JavaScript</h3>
          ) : null}
          {projectById.technologies &&
          projectById.technologies.NodeJS === true ? (
            <h3>NodeJS</h3>
          ) : null}
          {projectById.technologies &&
          projectById.technologies.React === true ? (
            <h3>React</h3>
          ) : null}
        </div>
        <div className={style.containerCreateBy}>
          <h3 className={style.CreateByUserPopupProjet}>{projectById.createdBy && projectById.createdBy.userName}</h3>
          <h3 className={style.CreateByEmailPopupProjet}>{projectById.createdBy && projectById.createdBy.email}</h3>
        </div>
        <div className={style.containerPart}>
          {projectById.participants &&
            projectById.participants.map((part) => (
              <div key={part._id}>
                <h3>{part.userName}</h3>
                <h3>{part.email}</h3>
              </div>
            ))}
        </div>
        <div className={style.containerBack}>
          <h3>{projectById.linkProjectBack}</h3>
        </div>
        <div className={style.containerFront}>
          <h3>{projectById.linkProjectFront}</h3>
        </div>
        <div className={style.containerTrello}>
          <h3>{projectById.linkProjectManagement}</h3>
        </div>
        <div>
          <button className={style.containerBtnFinish}>Finalizar Proyecto</button>
          <button className={style.containerBtnDelete}>Eliminar Proyecto</button>
        </div>
      </div>
    </div>
  );
};

export default PopupProject;