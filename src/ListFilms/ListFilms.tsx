import React from "react";
import s from './ListFilmsStyle.module.sass'
import {DataFilmType} from "../redux/ListFilmsReducer";
import {DataFilm} from "./DataFilm/DataFilm";


type ListFilmsPropsType = {
    dataFilms: Array<DataFilmType> | undefined
    setMovieDataList: (url: string) => void
}
export const ListFilms = (props: ListFilmsPropsType) => {


    let listFilms = props.dataFilms?.map(itemFilm => {
        return <DataFilm {...itemFilm}
                         setMovieDataList={props.setMovieDataList}
        />
    })
    return (
        <div className={s.wrapper}>
            {listFilms}
        </div>
    )
}