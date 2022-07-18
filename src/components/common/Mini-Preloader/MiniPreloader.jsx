import React from "react";
import preloader from "../../../assets/images/preloader2.gif"
import style from "./MiniPreloader.module.css"

const MiniPreloader = (props) => {
  return(
    <div className={style.mini_preloader}>
      <img src={preloader} /> 
    </div>
  )
}

export default MiniPreloader