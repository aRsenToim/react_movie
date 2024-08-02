import { FC } from 'react'
import s from './input.module.scss'


interface IProps {
    value: string
    onChange: (value: string) => void
    placeholder: string
}

const Input: FC<IProps> = ({value, onChange, placeholder}) => {
    return <input className={s.input} type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.currentTarget.value)} />

}


export default Input