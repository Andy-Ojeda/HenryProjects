import React, { useRef, useState, useEffect } from 'react'
import style from './FiltersPopUp.module.css';
// import { useDispatch } from 'react-redux';

export default function FiltersPopUp({handlerButton, popUp}) {
    
    // const dispatch = useDispatch();

    const myInputRef = useRef(null);
    
    const [htmlSN, setHtmlSN] = useState(false);
    const [cssSN, setCssSN] = useState(false);
    const [jsSN, setJsSN] = useState(false);
    const [reactSN, setReactSN] = useState(false);
    const [nodeSN, setNodeSN] = useState(false);


    useEffect(() => {
        // Enfocar en el input cuando el componente monta
        myInputRef.current.focus();
      }, []);

      
    const handleChange = (data) => {
        data === "HTML" && setHtmlSN(!htmlSN);
        data === "CSS" && setCssSN(!cssSN);
        data === "JS" && setJsSN(!jsSN);
        data === "REACT" && setReactSN(!reactSN);
        data === "NODE" && setNodeSN(!nodeSN);
    }

    const handlerButtonFilter = ()=> {
        const filtersToSend = [{"HTML":htmlSN&&htmlSN},{"CSS":cssSN&&cssSN},{"JavaScript":jsSN&&jsSN},{"React":reactSN&&reactSN},{"NodeJS":nodeSN&&nodeSN}];
        console.log("URL::: ", filtersToSend);
        handlerButton(filtersToSend);
    }


    return (
        <div ref={myInputRef}>
        {popUp && 
            <div className={style.contALL} >
                <div className={style.contTec}>
                    <div className={`${style.contComp} ${style.contCompHTML}`}>
                        <label>HTML</label><input type="checkbox" checked={htmlSN} name="HTML" id="" onChange={()=>handleChange("HTML")}/>
                    </div>
                    <div className={style.contComp}>
                        <label>CSS</label><input type="checkbox" checked={cssSN} name="CSS" id="" onChange={()=>handleChange("CSS")}/>
                    </div>
                    <div className={style.contComp}>
                        <label>JavaScript</label><input type="checkbox" checked={jsSN} name="JavaScript" id="" onChange={()=>handleChange("JS")}/>
                    </div>
                    <div className={style.contComp}>
                        <label>ReactJS</label><input type="checkbox" checked={reactSN} name="ReactJS" id="" onChange={()=>handleChange("REACT")}/>
                    </div>
                    <div className={style.contComp}>
                        <label>NodeJS</label><input type="checkbox" checked={nodeSN} name="NodeJS" id="" onChange={()=>handleChange("NODE")}/>
                    </div>
                    <div className={style.contButton}>
                        <button className={style.button} onClick={()=>handlerButtonFilter()}>Aplicar filtro</button>
                    </div>
                </div>
            </div>
}
        </div>
  )
}
