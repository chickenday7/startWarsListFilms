import {Dispatch} from "redux";
import {getData} from "../DAL/API";

const SET_FILMS = 'SET-FILMS'
const SET_PLANET = 'SET-PLANET'
const SET_MOVIE_DATA_LIST = 'SET-MOVIE-DATA-LIST'


export type DataFilmType = {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    species: Array<string>
    starships: Array<string>
    vehicles: Array<string>
    characters: Array<string>
    planets: Array<string>
    url: string
    created: string
    edited: string
}
type StateListFilmsType = {
    count: number | null
    next: null
    previous: null
    dataFilms: Array<DataFilmType> | []

}
let initialState: StateListFilmsType = {
    count: null,
    next: null,
    previous: null,
    dataFilms: [],
}


export const ListFilmsReducer = (state: StateListFilmsType = initialState, action: ActionListFilmsType): StateListFilmsType => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                dataFilms: action.dataFilms
            }
        case SET_MOVIE_DATA_LIST:
            return {
                ...state,
                dataFilms: [...state.dataFilms.map(film => {
                    return {...film}
                } )]
            }
        default:
            return state
    }
}
type ActionListFilmsType =
    SetFilmsACType |
    setMovieDataListType


type SetFilmsACType = { type: typeof SET_FILMS, dataFilms: Array<DataFilmType> }
let setFilmsAC = (arrayFilms: Array<DataFilmType>): SetFilmsACType => {
    return {
        type: SET_FILMS,
        dataFilms: arrayFilms
    }
}

type setMovieDataListType = { type: typeof SET_MOVIE_DATA_LIST, listItem: string }
let setMovieDataListAC = (listItem: string): setMovieDataListType => {
    return {
        type: SET_MOVIE_DATA_LIST,
        listItem
    }
}

export let setMovieDataListTC = (url: string) => {
    return (dispatch: Dispatch) => {
        getData.getList(url)
            .then((res) => {
                setMovieDataListAC(res)
            })
    }
}

export let setDataFilmsTC = () => {
    return (dispatch: Dispatch) => {
        getData.getFilms()
            .then((res) => {
                dispatch(setFilmsAC(res.results))
            })

    }
}
