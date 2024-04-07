import { FC } from 'react'
import s from './catalogCards.module.scss'
import FilmCard from '../../../../widgets/filmCard/filmCard'
import { IFilmCard } from '../../model/types'


interface IProps {
 title: string
 filmCards: IFilmCard[]
}

const CatalogCards: FC<IProps> = ({title, filmCards}) => {
 return <div className={s.CatalogCards}>
  <h2 className={s.CatalogCards__title}>{title}</h2>
  <div className={s.CatalogCards__items}>
  {filmCards.map((film) => <FilmCard key={film.id} title={film.title} id={film.id} img={film.img} type={film.type}/>)}
  </div>
 </div>
}


export default CatalogCards