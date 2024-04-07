import axios from "axios"
import { IFilmSearchCard } from "../model/types"




export const searchApi = {
 url: 'http://localhost:5000/searchFilms/',
 async getCardsSearchFilm(){
  const data = await axios.get<IFilmSearchCard[]>(this.url)
  return data.data
 }
}