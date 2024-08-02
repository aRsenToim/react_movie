import { FC } from 'react'
import s from './textarea.module.scss'

interface IProps {
    value: string
    onChange: (value: string) => void
    placeholder: string
}

const Textarea: FC<IProps> = ({value, onChange, placeholder}) => {
    return <textarea value={value} placeholder={placeholder} className={s.textarea} onChange={(e) => onChange(e.currentTarget.value)}></textarea>
}


export default Textarea