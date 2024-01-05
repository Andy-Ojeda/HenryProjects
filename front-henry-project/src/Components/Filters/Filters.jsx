import React, { useEffect, useRef, useState } from 'react'
import style from './Filters.module.css';
import PopUp from '../FiltersPopUp/FiltersPopUp';
import { useDispatch } from 'react-redux';
import { fetchProjectsFilter } from '../../Redux/Slices/viewProjectsSlice';
import { setViewFilter } from '../../Redux/Slices/viewProjectsSlice';
import { useSelector } from 'react-redux';

export default function Filters() {

  const dispatch = useDispatch();

  const [popUp, setPopUp] = useState(false);

  const projectsFilter = useSelector((state) => state.viewProjects.projectsFilter);
  

  useEffect(()=>{
    if (projectsFilter.length > 0) {
      dispatch(setViewFilter(true));
    } else {
      dispatch(setViewFilter(false));
    }
  },[projectsFilter])

  const handlerButton = (filtersUrlToSend) => {
    console.log("FILTERS recibido de PopUp: ", filtersUrlToSend)
    setPopUp(!popUp); //Estado que determina si se muestra u oculta el PopUp
    
    if (filtersUrlToSend) {
      
      let filtroTRUE = filtersUrlToSend.filter(tecnologia=> { //Guardo los que son TRUE
          return Object.values(tecnologia)[0] === true;
      });
      
      let modif1 = filtroTRUE.map((e)=>{  //Array de Objetos convertido a Array de arrays
        return Object.entries(e);
      })

      const newArray = modif1.map(([entry]) => {  //Armo Array de String del tipo "key=value"
        console.log("AAA...", entry[0]);
        console.log("BBB...", entry[1]);
        return entry[1] !== undefined ? [`${entry[0]}=${entry[1]}`] : null;
      });
      
      // console.log("NEW ARRAY...", newArray);

      let UrlToSend = `http://localhost:3001/filters/apply?`
      
      newArray.map((e)=>{
        console.log("VALOR...", e[0]);
        if (UrlToSend[UrlToSend.length-1] === "?"){ //Si la URL tiene en el final un "?" o si no lo tiene...
          UrlToSend += e[0];
        } else {
          UrlToSend += `&${e[0]}`
        }
      })

      console.log("URL...", UrlToSend);

      dispatch(fetchProjectsFilter(UrlToSend));
      
    }

  }
  


  return (
    <div className={style.contALL}>
        {/* <p>{popUp.toString()}</p> */}
        <button className={style.buttonFil} onClick={()=>handlerButton()}>Filtrar por... {popUp && "🔻"}</button>
        <div className={style.filters} >
            <PopUp handlerButton={handlerButton} popUp={popUp} />        
        </div>
    </div>
  )
}
