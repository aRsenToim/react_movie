import { FC } from 'react'
import s from './filmCard.module.scss'
import { NavLink } from 'react-router-dom'


interface IFilmCard {
 title: string
 id: string
 type: string
 img: string 
}

const FilmCard: FC<IFilmCard> = ({title, id, type, img}) => {
 return <div className={s.FilmCard}>
  <NavLink to={`/film/${id}`} >
   <img src={img} className={s.FilmCard__image} alt="" />
  </NavLink>
  <div className={s.FilmCard__info}>
   <NavLink to={`/film/${id}`} className={s.FilmCard__link}>
    <h3 className={s.FilmCard__title}>{title}</h3>
   </NavLink>
   <span className={s.FilmCard__type}>{type}</span>
  </div>
 </div>
}


export default FilmCard