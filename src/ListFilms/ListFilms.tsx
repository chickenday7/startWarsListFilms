import React from "react";
import s from './ListFilmsStyle.module.sass'
import {DataFilmType} from "../redux/ListFilmsReducer";
import {DataFilm} from "./DataFilm/DataFilm";



type ListFilmsPropsType = {
    dataFilms: Array<DataFilmType> | undefined

}
export const ListFilms = (props:ListFilmsPropsType) => {

    let listFilms = props.dataFilms?.map(itemFilm => {
        return <DataFilm {...itemFilm} />
    })
    return(
      <div className={s.wrapper}>
          {listFilms}
      </div>
  )
}