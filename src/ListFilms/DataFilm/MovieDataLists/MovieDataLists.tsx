import React, {useState} from "react";



type MovieDataListsType ={
    title:string
    array:string[]
    setMovieDataList:(url:string)=>void
}
export const MovieDataLists = (props:MovieDataListsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onSetCollapsed = () => {
        setCollapsed(!collapsed)
    }

  return(
      <>
          <h3 onClick={onSetCollapsed} >{props.title}</h3>
          { collapsed &&
              <ul>
                  {props.array.map(character => {
                      return <li>{character}</li>
                  })}
              </ul>
          }

      </>
  )
}