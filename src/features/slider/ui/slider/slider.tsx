import React, { FC, useRef, useState } from 'react'
import s from './slider.module.scss'

interface IProps {
 items: any[]
 children: React.ReactElement;
 cardSize: number,
 limit: number
}

const SliderComponent: FC<IProps> = ({ items, cardSize, children, limit }) => {
 const sliderRef = useRef<HTMLElement | null>(null);

 const [slider, setSlider] = useState<number>(0)
 return <div className={s.slider}>
  {items.length == limit || items.length < limit ? undefined : <h1 className={s.slider__button} onClick={() => {
   if (slider == 0) {
    return setSlider(0)
   }
   setSlider(prev => prev - cardSize)
  }}>{'<'}</h1>}
  <div className={s.slider__line} style={{
   right: `${slider}px`,
   transition: "0.5px right"
  }}>
   {React.cloneElement(children, { ref: sliderRef })}
  </div>
  {items.length == limit || items.length < limit ? undefined : <h1 className={s.slider__buttonRigth} onClick={() => {
   console.log(cardSize * items.length);

   if (slider > (cardSize * (items.length - 4))) {
    return setSlider(0)
   }
   setSlider(prev => prev + cardSize)
  }}>{'>'}</h1>}
 </div>
}

export default SliderComponent