import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/appStore";
import { getfilmsCategory } from "../../entities/filmCards";





export function useСategory(){
 const dispatch = useAppDispatch()
 const {filmsСategory} = useAppSelector(state => state.filmCards)


 useEffect(() => {
  if (!filmsСategory) {
   dispatch(getfilmsCategory())
  }
 })

 return {filmsСategory}
}