import React from "react";
import style from "./Filter.module.css";

let Filter = (props) => {
  let countItems = [];
  for (let i = 4; i <= 6; i++) {
    countItems.push(i);
  }

  return( 
    <div className={style.filter_wrap}>
      <div className={style.filter}>
        <div className={style.count_item_page}>
          <span>5</span>
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