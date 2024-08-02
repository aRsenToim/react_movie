import { FC } from 'react'
import s from './button.module.scss'


interface IProps {
    onclick: () => void
    text: string
}

const Button: FC<IProps> = ({onclick, text}) => {
    return <button className={s.Button} onClick={onclick}>{text}</button>
}


export default Button