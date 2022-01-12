import React, {useEffect} from "react";
import {ListFilms} from "./ListFilms";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {DataFilmType, setDataFilmsTC, setMovieDataListTC} from "../redux/ListFilmsReducer";
import {StoreType} from "../redux/store";

type ListFilmsContainerType = MapDispatchToProps & MapStateToProps
const ListFilmsContainer = (props:ListFilmsContainerType) => {
  
  useEffect(()=>{props.setDataFilms()},[])

  return <ListFilms dataFilms={props.dataFilms}
                    setMovieDataList={props.setMovieDataList}
  />
}


type MapStateToProps = {
  dataFilms: Array<DataFilmType> | undefined
}
let mapStateToProps = (store:StoreType):MapStateToProps => {
  return {
    dataFilms: store.ListFilmsPage.dataFilms
  }
}

type MapDispatchToProps = {
  setDataFilms: () => void
  setMovieDataList:(url:string)=>void
}
let mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>):MapDispatchToProps => {
  return {
    setDataFilms: ()=>{
      dispatch(setDataFilmsTC())
    },
    setMovieDataList:(url:string)=>{
      dispatch(setMovieDataListTC(url))
    }

  }

}
export let ListFilmsContext = connect<MapStateToProps,MapDispatchToProps,{},StoreType>(mapStateToProps,mapDispatchToProps)(ListFilmsContainer)

