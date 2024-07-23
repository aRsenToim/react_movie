import { FC, useState } from "react"
import { SearchBar } from "../entities/search"
import { useFilmCardsSearch } from "../shared/hooks/useFilmCardsSearch"
import { IFilmSearchCard } from "../entities/search/model/types"



const Search: FC = () => {
 const { filmCards } = useFilmCardsSearch()
 const [search, setSearch] = useState<string>('')

 const searchFilm = (array: IFilmSearchCard[], value: string) => {
  if (!value) return array
  return array?.filter((item) => {
   return item.title.toLowerCase().includes(value.toLowerCase())
  })
 }
 
 return <div>
  {filmCards ? <SearchBar filmCards={searchFilm(filmCards, search)} search={search} setSearch={setSearch} /> : undefined}
 </div>
}



export default Search