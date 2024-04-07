import { AppDispatch } from "../../../app/appStore"
import { filmsCardsApi } from "../api/filmsCardsApi"
import { IFilmsСategory } from "../model/types"
import { setError, setFilmsСategory } from "../model/filmCardsSlice"
import { AxiosError } from "axios"




export const getfilmsCategory = () => {
 return (dispatch: AppDispatch) => {
  filmsCardsApi.getFilmsCards().then((data: IFilmsСategory[]) => {
   dispatch(setFilmsСategory(data))
  }).catch((err: AxiosError | Error) => dispatch(setError(err.message)))
 }
} 