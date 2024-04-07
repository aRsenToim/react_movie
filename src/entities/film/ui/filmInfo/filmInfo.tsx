import { FC } from "react"
import s from './filmInfo.module.scss'


interface IProps {
 name: string,
 type: string,
 infoCard: {
  year: number,
  genre: string,
  limitationYear: number,
  grade: number,
  counterGrader: number
 },
 description: string,
 poster: string,

 addFavorite: () => void
 isFavorite: boolean

 addGrade: () => void
 isGrade: boolean

 watchMovie: () => void
 watchTrailer: () => void
}

const FilmInfo: FC<IProps> = ({ name, type, isFavorite, watchMovie, watchTrailer, infoCard, description, addGrade, isGrade, poster, addFavorite }) => {
 return <div className={s.FilmInfo} style={{
  backgroundImage: `url(${poster})`,
  backgroundSize: "cover",
  width: "100%",
  height: "600px",
 }}>
  <h1 className={s.FilmInfo__title}>{name}</h1>
  <div className={s.FilmInfo__infoGrade}>
   <span className={s.FilmInfo__year}>{infoCard.year}</span>
   <span className={s.FilmInfo__type}>{type}</span>
   <div className={s.FilmInfo__ageRating}>
    {infoCard.limitationYear}+
   </div>
   <div className={s.FilmInfo__star}>
    <h1>{infoCard.grade}</h1>
    <span>{infoCard.counterGrader}</span>
   </div>
  </div>
  <div className={s.FilmInfo__description}>
   {description}
  </div>
  <div className={s.FilmInfo__buttons}>
   <button className={s.FilmInfo__buttonLight} onClick={watchMovie}>
    Watch movie
   </button>
   <button className={s.FilmInfo__buttonDark} onClick={watchTrailer}>Trailer</button>
   <button onClick={addFavorite} className={s.FilmInfo__buttonDark}>
    {isFavorite ? <img src="/icons/favofiteActive.svg" alt="" /> : <img src="/icons/favofite.svg" alt="" />}
   </button>
   {isGrade ? <button className={s.FilmInfo__buttonDark}>
    <img src="/icons/starActive.svg" alt="" />
   </button> : <button className={s.FilmInfo__buttonDark} onClick={addGrade}>
    <img src="/icons/star.svg" alt="" />
   </button>}
  </div>
 </div>
}


export default FilmInfo