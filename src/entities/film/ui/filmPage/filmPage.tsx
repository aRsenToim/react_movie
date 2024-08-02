import { FC } from 'react'
import s from './filmPage.module.scss'
import FilmInfo from '../filmInfo/filmInfo'
import { IFilm, IReview } from '../../model/types'
import Reviews from '../../../../widgets/reviews/reviews'
import Comments from '../../../../widgets/comments/comments'


interface IProps {
    film: IFilm,
    isFavorite: boolean
    addFavorite: () => void
    addGrade: () => void
    watchMovie: () => void
    watchTrailer: () => void
    isGrade: boolean
    comments: IReview[]
    addreviews: (review: IReview) => void
}

const FilmPage: FC<IProps> = ({ film, addreviews, comments, addFavorite, addGrade, isGrade, isFavorite, watchMovie, watchTrailer }) => {

    return <div className={s.Film}>
        <FilmInfo addFavorite={addFavorite} addGrade={addGrade} watchMovie={watchMovie} watchTrailer={watchTrailer} isGrade={isGrade} name={film.name} isFavorite={isFavorite} type={film.type} infoCard={film.infoCard} description={film.description} poster={film.poster} />
        <Reviews addreviews={addreviews}/>
        <Comments comments={comments}/>
    </div>
}


export default FilmPage
