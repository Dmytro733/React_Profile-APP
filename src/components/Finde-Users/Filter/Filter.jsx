import React from "react";
import MiniPreloader from "../../common/Mini-Preloader/MiniPreloader";
import style from "./Filter.module.css";

let Filter = (props) => {
  let countItems = [];
  for (let i = 4; i <= 6; i++) {
    countItems.push(i);
  }
  

  return( 
    <div className={`${style.filter_wrap} ${props.isFatching ? "opacity":""}`}>
      {props.isFatching ? <MiniPreloader /> : null}
      <div className={style.filter}>
        <div className={style.count_item_page}>
          {props.isFatching ? null : <span>{props.perPage} items</span>}
        </div>
        <div className={style.select_count_item}>
          <select name={props.perPage} onChange={(event)=>{props.onCountItemsChanged(event.target.value)}}>
            {countItems.map(countItem => {
                return <option value={countItem} selected={props.perPage == countItem}>{countItem}</option>
              })
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter;