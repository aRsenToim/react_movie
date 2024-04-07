import { FC } from 'react'
import s from './filmPage.module.scss'
import FilmInfo from '../filmInfo/filmInfo'
import { IFilm } from '../../model/types'


interface IProps {
 film: IFilm,
 isFavorite: boolean
 addFavorite: () => void
 addGrade: () => void
 watchMovie: () => void
 watchTrailer: () => void
 isGrade: boolean
}

const FilmPage: FC<IProps> = ({film, addFavorite, addGrade, isGrade, isFavorite, watchMovie, watchTrailer}) => {
 
 return <div className={s.Film}>
  <FilmInfo addFavorite={addFavorite} addGrade={addGrade} watchMovie={watchMovie} watchTrailer={watchTrailer} isGrade={isGrade} name={film.name} isFavorite={isFavorite} type={film.type} infoCard={film.infoCard} description={film.description} poster={film.poster}/>
 </div>
}


export default FilmPage
