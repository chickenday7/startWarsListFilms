import React from "react";
import s from './DataFilmStyle.module.scss'
import {DataFilmType} from "../../redux/ListFilmsReducer";
import {MovieDataLists} from "./MovieDataLists/MovieDataLists";


type DataFilmPropsType = DataFilmType & {
    setMovieDataList:(url:string)=>void
}
export const DataFilm = (props:DataFilmPropsType) => {




  return(
      <div className={s.wrapperFilm}>
            <h3>{props.title}</h3>
            <span>{props.opening_crawl}</span>
            <MovieDataLists title={'planets'}
                            array={props.planets}
                            setMovieDataList={props.setMovieDataList} />

      </div>
  )
}