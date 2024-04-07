import { FC } from 'react'
import s from './search.module.scss'


interface IProps {
 searсh: string
 setSearch: (value: string) => void
}

const SearchComponent: FC<IProps> = ({searсh, setSearch}) => {
 return <input className={s.search} value={searсh} onChange={(el) => {setSearch(el.currentTarget.value)}} type="text" placeholder='Search' />
}

export default SearchComponent