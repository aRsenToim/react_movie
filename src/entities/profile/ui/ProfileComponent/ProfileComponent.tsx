import { FC } from 'react'
import s from './ProfileComponent.module.scss'
import FilmCard from '../../../../widgets/filmCard/filmCard'
import { IFilmSearchCard } from '../../../search/model/types'


interface IProps {
 favoriteCards: IFilmSearchCard[]
 gradeCards: IFilmSearchCard[]
}

const ProfileComponent: FC<IProps> = ({ favoriteCards, gradeCards }) => {
 return <div className={s.Profile}>
  <div className={s.Profile__block}>
   <h2 className={s.Profile__title}>Favorites: </h2>
   <div className={s.Profile__items}>
   {favoriteCards.length == 0 ? <div>test</div> : undefined}
    {favoriteCards.map((item: IFilmSearchCard) => <FilmCard key={item.id} title={item.title} type={item.type} img={item.img} id={item.id} />)}
   </div>
  </div>
  <div className={s.Profile__block}>
   <h2 className={s.Profile__title}>Grades: </h2>
   <div className={s.Profile__items}>
    {gradeCards.length == 0 ? <div>test</div> : undefined}
    {gradeCards.map((item: IFilmSearchCard) => <FilmCard key={item.id} title={item.title} type={item.type} img={item.img} id={item.id} />)}
   </div>
  </div>
 </div>
}


export default ProfileComponent