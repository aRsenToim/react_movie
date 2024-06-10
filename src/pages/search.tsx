import { FC, useState } from "react"
import { SearchBar } from "../entities/search"
import { useFilmCardsSearch } from "../shared/hooks/useFilmCardsSearch"
import { IFilmSearchCard, IOption } from "../entities/search/model/types"



const Search: FC = () => {
 const { filmCards } = useFilmCardsSearch()
 const [search, setSearch] = useState<string>('')
 const [optionsType, setOptionsType] = useState<IOption[]>([
  {
   title: "Series",
   isActive: false,
   id: "a1",
  },
  {
   title: "Movie",
   isActive: false,
   id: "a2"
  },
 ]) 
 const [Categories, setCategories] = useState<IOption[]>([
  {
   title: "Historical",
   isActive: false,
   id: "b1"
  },
  {
   title: "Drama",
   isActive: false,
   id: "b2"
  },
  {
   title: "Action",
   isActive: false,
   id: "b3"
  },
  {
   title: "Crime",
   isActive: false,
   id: "b4"
  },
  {
   title: "Thriller",
   isActive: false,
   id: "b5"
  }
 ]) 


 const searchFilm = (array: IFilmSearchCard[], value: string) => {
  if (!value) return array
  return array?.filter((item) => {
   return item.title.toLowerCase().includes(value.toLowerCase())
  })
 }
 

 return <div>
  {filmCards ? <SearchBar Categories={Categories} optionsType={optionsType} filmCards={searchFilm(filmCards, search)} search={search} setSearch={setSearch} /> : undefined}
 </div>
}



export default Search