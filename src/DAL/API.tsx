import axios from "axios";
import {DataFilmType} from "../redux/ListFilmsReducer";


type GetFilmsType = {
    count:number | null
    next: null
    previous: null
    results:Array<DataFilmType>

}
export const getData = {
    getFilms(){
        return  axios.get<GetFilmsType>('https://swapi.dev/api/films')
            .then((res)=> {
                return res.data
            })
    },
    getStarships(url:string){
      return axios.get(`${url}`)
          .then((res) =>{
              return res.data
          })
    }
}