import { FC } from "react"
import s from './searchBar.module.scss'
import { SearchComponent } from "../../../../features/search"
import SearchBlock from "../searchBlock/searchBlock"
import { IFilmSearchCard } from "../../model/types"
import OptionsBar from "../optionsBar/optionsBar"

interface IProps {
 filmCards: IFilmSearchCard[]
 search: string
 setSearch: (value: string) => void
}

const SearchBar: FC<IProps> = ({ filmCards, search, setSearch }) => {
 return <div className={s.Search}>
  <div className={s.SearchBar}>
   <SearchComponent searсh={search} setSearch={(value: string) => { setSearch(value) }} />
   <div className={s.SearchBar__items}>
    {filmCards.map((filmCard: IFilmSearchCard) => <SearchBlock title={filmCard.title} grade={filmCard.grade} type={filmCard.type} year={filmCard.year} id={filmCard.id} img={filmCard.img} key={filmCard.id} />)}
   </div>
  </div>
  <OptionsBar />
 </div>
}

export default SearchBar