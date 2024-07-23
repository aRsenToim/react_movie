import { FC } from 'react'
import s from './vidio.module.scss'

interface IProps {
 url: string
 setIsWindowVidio: () => void
 poster: string
}

const Vidio: FC<IProps> = ({ url, setIsWindowVidio, poster }) => {
    console.log(window.innerWidth);
    
 return <>
  <div className={s.Trailer}>
   <div className={s.close} onClick={setIsWindowVidio}>
    <img src="/icons/close.svg" alt="" />
   </div>
    <video controls className={s.Vidio}>
       <source src='/test.mp4' type='video/mp4'></source>
    </video>
  </div>
  <div className={s.shadow}></div>
 </>
}


export default Vidio