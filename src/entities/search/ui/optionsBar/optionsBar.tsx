import { FC } from 'react'
import s from './optionsBar.module.scss'



const OptionsBar: FC = () => {
 
 return <div className={s.optionsBar}>
  <ul className={s.optionsBar__items}>
   <li className={s.optionsBar__title}>
    Type
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Series
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Movie
   </li>
  </ul>
  <ul className={s.optionsBar__items}>
   <li className={s.optionsBar__title}>
    Categories
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Historical
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Drama
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Action
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Crame
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="" />
    </div>
    Thriller
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="checkbox2" />
    </div>
    <label htmlFor='checkbox2'>Cartoon</label>
   </li>
   <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     <input type="checkbox" name="" id="checkbox" />
    </div>
    <label htmlFor='checkbox'>Fantasy</label>
   </li>
  </ul>
 </div>
}

export default OptionsBar