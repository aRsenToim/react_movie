import axios from "axios"
import { IFilmSearchCard } from "../model/types"




export const searchApi = {
 url: 'https://6624902904457d4aaf9c76ab.mockapi.io/searchFilms',
 async getCardsSearchFilm(){
  const data = await axios.get<IFilmSearchCard[]>(this.url)
  return data.data
 }
}