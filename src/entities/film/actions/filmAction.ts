import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { filmApi } from "../api/filmApi"
import { setError, setFilm } from "../model/filmSlice"
import { IFilm } from "../model/types"




export const getFilmFetch = (id: string) => {
 return (dispatch: AppDispatch) => {
  filmApi.getFilm(id).then((data: IFilm) => {
   dispatch(setFilm(data))
  }).catch((err: AxiosError | Error) => dispatch(setError(err.message)))
 }
}