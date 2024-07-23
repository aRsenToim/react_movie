import { FC } from 'react'
import s from './baseLayout.module.scss'
import { Outlet } from 'react-router'
import Navbar from '../../../widgets/navbar/navbar'
import { RatingWindow, setIsWindow } from '../../../processes/rating'
import { useAppDispatch, useAppSelector } from '../../appStore'
import { Vidio, setIsWindowVidio } from '../../../processes/vidio'
import Header from '../../../widgets/header/header'




const BaseLayout: FC = () => {
 const dispatch = useAppDispatch()
 const {isWindow} = useAppSelector(state => state.ratingSlice)
 const {isWindowVidio, url, poster} = useAppSelector(state => state.vidioSlice)
 return <div> 
  {isWindow ? <RatingWindow closeWindow={() => {dispatch(setIsWindow())}}/> : undefined}
  {isWindowVidio ? <Vidio url={url} poster={poster} setIsWindowVidio={() => {dispatch(setIsWindowVidio())}}/> : undefined}
  <div className={s.BaseLayout}>
   <Navbar />
   <Header/>
   <div className={s.BaseLayout__content}>
    <Outlet />
   </div>
  </div>
 </div>
}

export default BaseLayout