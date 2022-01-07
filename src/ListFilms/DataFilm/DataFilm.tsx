import React from "react";
import {DataFilmType} from "../../redux/ListFilmsReducer";
import s from './DataFilmStyle.module.scss'


export const DataFilm = (props:DataFilmType) => {
  return(
      <div className={s.wrapperFilm}>
            <h3>{props.title}</h3>
            <span>{props.opening_crawl}</span>
            <span></span>
      </div>
  )
}