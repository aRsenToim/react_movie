import { FC } from 'react'
import s from './searchBlock.module.scss'
import { NavLink } from 'react-router-dom'


interface IProps {
 id: string
 title: string
 grade: number
 year: number
 type: string
 img: string
}

const SearchBlock: FC<IProps> = ({id, title, grade, year, type, img}) => {
 return <NavLink className={s.Navlink} to={`/film/${id}`}>
  <div className={s.film}>
   <img className={s.film__poster} src={img} alt="" />
   <div className={s.title}>
    <h1>{title}</h1>
    <div className={s.title__info}>
     <span className={s.grade}>{grade}</span>
     <span className={s.year}>{year}</span>
     <span className={s.type}>{type}</span>
    </div>
   </div>
  </div>
 </NavLink>
}


export default SearchBlock