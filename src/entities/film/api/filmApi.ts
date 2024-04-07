import axios from "axios"
import { IFilm } from "../model/types"



export const filmApi = {
 url: "http://localhost:5000/films/",
 async getFilm(id: string){
  const data = await axios.get<IFilm>(`${this.url}${id}`)
  return data.data
 }
}
