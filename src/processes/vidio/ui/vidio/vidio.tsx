import { FC } from 'react'
import s from './vidio.module.scss'
import VideoPlayer from 'react-video-js-player';


interface IProps {
 url: string
 setIsWindowVidio: () => void
 poster: string
}

const Vidio: FC<IProps> = ({ url, setIsWindowVidio, poster }) => {
 return <>
  <div className={s.Trailer}>
   <div className={s.close} onClick={setIsWindowVidio}>
    <img src="/icons/close.svg" alt="" />
   </div>
   <VideoPlayer
    controls={true}
    src={url}
    poster={poster}
    width="1200px"
    height="700px"
   />
  </div>
  <div className={s.shadow}></div>
 </>
}


export default Vidio