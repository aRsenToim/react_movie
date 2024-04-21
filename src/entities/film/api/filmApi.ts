import axios from "axios"
import { IFilm } from "../model/types"



export const filmApi = {
 url: "https://66248f2804457d4aaf9c7410.mockapi.io/films",
 async getFilm(id: string){
  const data = await axios.get<IFilm>(`${this.url}/${id}`)
  return data.data
 }
}
