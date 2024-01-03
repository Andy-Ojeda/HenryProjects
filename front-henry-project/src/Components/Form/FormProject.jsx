import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../Redux/Slices/CreateProject';

const ProjectForm = () => {
    const dispatch = useDispatch()
    const {loading, error, successMessage} = useSelector((state) => state.project)
    const [proyectData, setProjectData] = useState({
        name: '',
        description: '',
        technologies: '',
        linkProjectFront: '',
    linkProjectBack: '',
    createdBy: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject(projectData));
      };

      return (
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario... */}
          <button type="submit" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Proyecto'}
          </button>
          {error && <p>Error: {error}</p>}
          {successMessage && <p>Éxito: {successMessage}</p>}
        </form>
      );
}

export default ProjectForm;