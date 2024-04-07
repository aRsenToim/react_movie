import { AppDispatch } from "../../../app/appStore"
import { localStorageApi } from "../api/localStorage"
import { setFavorites, setGrades } from "../model/profileSlice"




export const setProfileFetch = () => {
 return (dispatch: AppDispatch) => {
  dispatch(setFavorites(localStorageApi.getFavotites()))
  dispatch(setGrades(localStorageApi.getGrade()))
 }
}


export const addFavoritesFetch = (favorites: string[]) => {
 return (dispatch: AppDispatch) => {
  dispatch(setFavorites(favorites))
  localStorageApi.setFavotites(favorites)
 }
}

export const addGradeFetch = (grades: string[]) => {
 return (dispatch: AppDispatch) => {
  dispatch(setGrades(grades))
  localStorageApi.setGrade(grades)
 }
}