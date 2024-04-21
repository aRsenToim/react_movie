import { FC } from 'react'
import s from './ProfileComponent.module.scss'
import FilmCard from '../../../../widgets/filmCard/filmCard'
import { IFilmSearchCard } from '../../../search/model/types'
import { SliderComponent } from '../../../../features/slider'


interface IProps {
 favoriteCards: IFilmSearchCard[]
 gradeCards: IFilmSearchCard[]
}


const ProfileComponent: FC<IProps> = ({ favoriteCards, gradeCards }) => {


 return <div className={s.Profile}>
  <div className={s.Profile__block}>
   <h2 className={s.Profile__title}>Favorites: </h2>
   <div className={s.Profile__items}>
    {favoriteCards.length == 0 ? <h1>None</h1> : undefined}
    <SliderComponent limit={3} items={favoriteCards} cardSize={288} children={<>{favoriteCards.map((item: IFilmSearchCard) => <FilmCard key={item.id} title={item.title} type={item.type} img={item.img} id={item.id} />)}</>} />
   </div>
  </div>
  <div className={s.Profile__block}>
   <h2 className={s.Profile__title}>Grades: </h2>
   <div className={s.Profile__items}>
    {gradeCards .length == 0 ? <h1>None</h1> : undefined}
    <SliderComponent limit={3} items={gradeCards} cardSize={288} children={<>{gradeCards.map((item: IFilmSearchCard) => <FilmCard key={item.id} title={item.title} type={item.type} img={item.img} id={item.id} />)}</>} />
   </div>
  </div>
 </div>
}


export default ProfileComponent