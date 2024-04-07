import { FC, useEffect, useState } from "react"
import { FilmPage, getFilmFetch } from "../entities/film"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/appStore"
import { useProfile } from "../shared/hooks/useProfile"
import { addFavoritesFetch, addGradeFetch } from "../entities/profile"
import { setIsWindow } from "../processes/rating"
import { setIsWindowVidio, setPoster, setUrl } from "../processes/vidio"




const Film: FC = () => {
 const { id } = useParams<string>()
 const film = useAppSelector(state => state.film.film)
 const { favorites, grades } = useProfile()
 const [isFavorite, setIsFavorite] = useState<boolean>(false)
 const [isGrade, setIsGrade] = useState<boolean>(false)
 const dispatch = useAppDispatch()


 useEffect(() => {
  if (!film || film.id !== id) {
   dispatch(getFilmFetch(id ?? ''))
  }
 }, [id])

 useEffect(() => {
  if (favorites && film && grades) {
   setIsFavorite(favorites.includes(film.id))
   setIsGrade(grades.includes(film.id)) 
  }
 }, [favorites, film, grades])

 const handleAddFavoritesFetch = () => {
  const arr = [...favorites ?? []]

  if (arr.includes(String(film?.id))) {
   arr.splice(arr.indexOf(film?.id ?? ''), 1)
  } else {
   arr.push(film?.id ?? '')
  }

  return arr
 }
 const handleAddGradeFetch = () => {
  const arr = [...grades ?? []]

  if (arr.includes(String(film?.id))) {
   arr.splice(arr.indexOf(film?.id ?? ''), 1)
  } else {
   arr.push(film?.id ?? '')
  }

  return arr
 }

 return <div>
  {film ? <FilmPage isGrade={isGrade} 
  watchMovie={() => {
   dispatch(setPoster(film.poster))
   dispatch(setUrl(film.urlVideo))
   dispatch(setIsWindowVidio())
  }}
  watchTrailer={() => {
   dispatch(setPoster(film.poster))
   dispatch(setUrl(film.trailerUrl))
   dispatch(setIsWindowVidio())
  }}
  addGrade={() => {
   dispatch(setIsWindow())
   dispatch(addGradeFetch(handleAddGradeFetch()))
  }} addFavorite={() => {
   dispatch(addFavoritesFetch(handleAddFavoritesFetch()))
  }} isFavorite={isFavorite} film={film} /> : undefined}
 </div>
}


export default Film