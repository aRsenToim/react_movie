import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { searchApi } from "../api/searchApi"
import { setError, setFilmCards } from "../model/searchSlice"
import { IFilmSearchCard } from "../model/types"




export const getFilmCards = () => {
 return (dispatch: AppDispatch) => {
  searchApi.getCardsSearchFilm().then((data: IFilmSearchCard[]) => {
   dispatch(setFilmCards(data))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}