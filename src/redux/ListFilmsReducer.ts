import {Dispatch} from "redux";
import {getData} from "../DAL/API";
const SET_FILMS = 'SET-FILMS'




export type DataFilmType = {
    title:string
    episode_id:number
    opening_crawl:string
    director:string
    producer:string
    release_date:string
    species:Array<string>
    starships:Array<string>
    vehicles:Array<string>
    characters:Array<string>
    planets:Array<string>
    url:string
    created:string
    edited:string
}
type StateListFilmsType = {
    count: number | null
    next:null
    previous:null
    dataFilms:Array<DataFilmType> | undefined

}
let initialState:StateListFilmsType = {
    count:null,
    next:null,
    previous:null,
    dataFilms: undefined,
    }

export const ListFilmsReducer = (state:StateListFilmsType=initialState,action:ActionListFilmsType):StateListFilmsType => {
    switch (action.type){
        case SET_FILMS:
        return {
            ...state,
            dataFilms: action.dataFilms
        }
        default:
            return state
    }
}
type ActionListFilmsType = SetFilmsACType


type SetFilmsACType = {type:typeof SET_FILMS,dataFilms:Array<DataFilmType>}
let setFilmsAC = (arrayFilms:Array<DataFilmType>):SetFilmsACType => {
    return{
        type: SET_FILMS,
        dataFilms: arrayFilms
    }
}

export let setDataFilmsTC = () => {
    return (dispatch:Dispatch) => {
        getData.getFilms()
            .then((res)=>{
                dispatch(setFilmsAC(res.results))
            })
    }
}
