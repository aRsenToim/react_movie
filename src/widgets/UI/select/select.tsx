import { FC } from 'react'
import s from './select.module.scss'


interface IProps {
    value: string
    item: string[]
    onchange: (value: string) => void
}

const Select: FC<IProps> = ({ value, item, onchange }) => {
    return <select className={s.Select} value={value} onChange={(e) => onchange(e.currentTarget.value)}>
        {item.map((item: string) => <option className={s.Select__option} key={item} value={item}>{item}</option>)}
    </select>
}


export default Select