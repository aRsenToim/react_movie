import { $api } from "."
import { IFilmsСategory } from "../model/types"


export const filmsCardsApi = {
 async getFilmsCards(){
  const data = await $api.get<IFilmsСategory[]>('/filmCardsCategory')
  return data.data
 }
}