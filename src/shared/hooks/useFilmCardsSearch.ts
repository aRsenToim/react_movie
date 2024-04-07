import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/appStore";
import { getFilmCards } from "../../entities/search";




export function useFilmCardsSearch() {
 const dispatch = useAppDispatch()
 const filmCards = useAppSelector(state => state.searchSlice.filmCards)

 useEffect(() => {
  if(!filmCards){
   dispatch(getFilmCards())
  }
 }, [])

 return {filmCards}
}