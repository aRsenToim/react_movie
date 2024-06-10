import { FC } from 'react'
import s from './optionsBar.module.scss'
import { IOption } from '../../model/types'

interface IProps {
 optionsType: IOption[],
 Categories: IOption[]
}

const OptionsBar: FC<IProps> = ({ optionsType, Categories }) => {

 return <div className={s.optionsBar}>
  <ul className={s.optionsBar__items}>
   <li className={s.optionsBar__title}>
    Type
   </li>
   {optionsType.map((option: IOption) => <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     {option.isActive ? <input checked type="checkbox" name="" id="" /> : <input type="checkbox" name="" id="" />}
    </div>
    {option.title}
   </li>)}
  </ul>
  <ul className={s.optionsBar__items}>
   <li className={s.optionsBar__title}>
    Categories
   </li>
   {Categories.map((option: IOption) => <li className={s.optionsBar__item}>
    <div className={s.optionsBar__checkbox}>
     {option.isActive ? <input checked type="checkbox" name="" id="" /> : <input type="checkbox" name="" id="" />}
    </div>
    {option.title}
   </li>)}
  </ul>
 </div>
}

export default OptionsBar