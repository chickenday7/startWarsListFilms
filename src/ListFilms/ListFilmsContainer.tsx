import React, {useEffect} from "react";
import {ListFilms} from "./ListFilms";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {DataFilmType, setDataFilmsTC} from "../redux/ListFilmsReducer";
import {StoreType} from "../redux/store";

type ListFilmsContainerType = MapDispatchToProps & MapStateToProps
const ListFilmsContainer = (props:ListFilmsContainerType) => {
  
  useEffect(()=>{props.getDataFilms()},[])

  return <ListFilms dataFilms={props.dataFilms} />
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
  getDataFilms: () => void
}
let mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>):MapDispatchToProps => {
  return {
    getDataFilms: ()=>{
      dispatch(setDataFilmsTC())
    }
  }

}
export let ListFilmsContext = connect<MapStateToProps,MapDispatchToProps,{},StoreType>(mapStateToProps,mapDispatchToProps)(ListFilmsContainer)

