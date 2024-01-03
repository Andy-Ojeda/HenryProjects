import React, { useRef, useState, useEffect } from 'react'
import style from './FiltersPopUp.module.css';


export default function FiltersPopUp({handlerButton, popUp}) {
    
    console.log("POPOPOPOPOPO...", popUp);
    // const [popUp2, setPopUp2] = useState(null);
    const myInputRef = useRef(null);
    
    useEffect(() => {
        // Enfocar en el input cuando el componente monta
        myInputRef.current.focus();
      }, []);

    return (
        <div ref={myInputRef}>
        {popUp && 
            <div className={style.contALL} >
                <div className={style.contTec}>
                    <div className={`${style.contComp} ${style.contCompHTML}`}>
                        <label>HTML</label><input type="checkbox" name="HTML" id="" />
                    </div>
                    <div className={style.contComp}>
                        <label>CSS</label><input type="checkbox" name="CSS" id="" />
                    </div>
                    <div className={style.contComp}>
                        <label>JavaScript</label><input type="checkbox" name="JavaScript" id="" />
                    </div>
                    <div className={style.contComp}>
                        <label>ReactJS</label><input type="checkbox" name="ReactJS" id="" />
                    </div>
                    <div className={style.contComp}>
                        <label>NodeJS</label><input type="checkbox" name="NodeJS" id="" />
                    </div>
                    <div className={style.contButton}>
                        <button className={style.button} onClick={()=>handlerButton(false)}>Aplicar filtro</button>
                    </div>
                </div>
            </div>
}
        </div>
  )
}
