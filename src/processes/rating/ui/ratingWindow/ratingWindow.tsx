import { FC, useState } from 'react'
import s from './ratingWindow.module.scss'

interface IStar {
 id: number,
 isActive: boolean
}

interface IProps {
 closeWindow: () => void
}

const RatingWindow: FC<IProps> = ({ closeWindow }) => {
 const [stars, setStars] = useState<IStar[]>([
  { id: 1, isActive: false },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
  { id: 9, isActive: false },
  { id: 10, isActive: false },
 ])

 const starClick = (id: number) => {
  const starsCopy = [...stars]
  starsCopy.forEach(el => {
   if (id >= el.id) {
    el.isActive = true
   } else {
    el.isActive = false
   }
  })
  setStars(starsCopy)
 }

 return <div className={s.WindowStar}>
  <span className={s.close} onClick={() => { closeWindow() }}>
   <img src="/img/icon/close.svg" alt="" />
  </span>
  <div className={s.buttons}>
   {stars.map(el => <div key={el.id} onClick={() => { starClick(el.id) }} onMouseEnter={() => { starClick(el.id) }} className={el.isActive ? s.starActive : s.star}>
    <svg width="35px" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M8.14374 4.62756C8.93034 2.66656 9.32364 1.68607 9.99997 1.68607C10.6763 1.68607 11.0696 2.66657 11.8562 4.62757L11.8928 4.71888C12.3372 5.82675 12.5594 6.38068 13.0123 6.71737C13.4651 7.05406 14.0596 7.1073 15.2485 7.21377L15.4634 7.23302C17.4092 7.40729 18.3822 7.49442 18.5903 8.1134C18.7985 8.73239 18.076 9.38973 16.6309 10.7044L16.1487 11.1432C15.4172 11.8087 15.0514 12.1415 14.8809 12.5776C14.8491 12.659 14.8227 12.7423 14.8018 12.8271C14.6897 13.2818 14.7968 13.7645 15.0111 14.73L15.0777 15.0305C15.4714 16.8048 15.6682 17.692 15.3246 18.0747C15.1961 18.2177 15.0292 18.3206 14.8438 18.3712C14.3476 18.5066 13.6431 17.9326 12.2342 16.7845C11.309 16.0306 10.8464 15.6536 10.3153 15.5688C10.1064 15.5355 9.89353 15.5355 9.68463 15.5688C9.15352 15.6536 8.69094 16.0306 7.76577 16.7845C6.35681 17.9326 5.65234 18.5066 5.15614 18.3712C4.97072 18.3206 4.80381 18.2177 4.67538 18.0747C4.33171 17.692 4.52854 16.8048 4.92222 15.0305L4.98889 14.73C5.2031 13.7645 5.31021 13.2818 5.19815 12.8271C5.17725 12.7423 5.15081 12.659 5.11901 12.5776C4.94854 12.1415 4.58279 11.8087 3.85128 11.1432L3.369 10.7044C1.92395 9.38973 1.20143 8.73239 1.40961 8.1134C1.61779 7.49442 2.5907 7.40729 4.53651 7.23302L4.75145 7.21377C5.94036 7.1073 6.53482 7.05406 6.98767 6.71737C7.44052 6.38068 7.66272 5.82675 8.10711 4.71888L8.14374 4.62756Z" stroke="#33363F" stroke-width="2" />
    </svg>
    <h3>{el.id}</h3>
   </div>)}
   <button className={s.rate} onClick={() => {
    closeWindow()
   }}>Rate</button>
  </div>
 </div>
}


export default RatingWindow