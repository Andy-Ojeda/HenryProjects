import React, { useRef, useState } from 'react'
import style from './Filters.module.css';
import PopUp from '../FiltersPopUp/FiltersPopUp';

export default function Filters() {

  

  const [popUp, setPopUp] = useState(false);

  const handlerButton = () => {
    
    setPopUp(!popUp);
    // myDivRef.current.focus();
  }
  


  return (
    <div className={style.contALL}>
        <p>{popUp.toString()}</p>
        <button className={style.buttonFil} onClick={()=>handlerButton()}>Filtrar por... {popUp && "🔻"}</button>
        <div className={style.filters} >
            <PopUp handlerButton={handlerButton} popUp={popUp} />        
        </div>
    </div>
  )
}
