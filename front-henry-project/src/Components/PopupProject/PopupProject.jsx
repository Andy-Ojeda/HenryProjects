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
      <IoCloseCircle className={style.closePopup} onClick={handlerShowPopUp} />
      <div className={style.popupProject}>
        <div className={style.image}>
          <img
            src={Logo}
            alt="Imagen del Proyecto"
            className={style.imagePopupProject}
          />
        </div>
        <div className={style.part}>
          {projectById.participants &&
            projectById.participants.map((part) => (
              <div key={part._id} className={style.containerPart}>
                <h3 className={style.partPopupProject}>{part.userName}</h3>
                <h3>{part.email}</h3>
              </div>
            ))}
        </div>
        <div className={style.created}>
          <h3>Creado por:</h3>
          <div>
            <h3 className={style.createByUserPopupProjet}>
              {projectById.createdBy && projectById.createdBy.userName}
            </h3>
            <h3 className={style.createByEmailPopupProjet}>
              {projectById.createdBy && projectById.createdBy.email}
            </h3>
          </div>
        </div>
        <div className={style.name}>
          <h2 className={style.namePopupProjet}>{projectById.name}</h2>
        </div>
        <div className={style.tech}>
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
        <div className={style.description}>
          <p className={style.descriptionPopupProject}>
            {projectById.description}
          </p>
        </div>
        <div className={style.front}>
          <h3>
            {projectById.linkProjectFront
              ? projectById.linkProjectFront
              : "Link Front"}
          </h3>
        </div>
        <div className={style.back}>
          <h3>
            {projectById.linkProjectBack
              ? projectById.linkProjectBack
              : "Link Back"}
          </h3>
        </div>
        <div className={style.trello}>
          <h3>
            {projectById.linkProjectManagement
              ? projectById.linkProjectManagement
              : "Link Trello"}
          </h3>
        </div>
        <div className={style.finish}>
          <button className={style.containerBtnFinish}>
            Finalizar Proyecto
          </button>
        </div>
        <div className={style.delete}>
          <button className={style.containerBtnDelete}>
            Eliminar Proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupProject;
