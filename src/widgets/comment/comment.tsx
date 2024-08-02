import { FC } from 'react'
import s from './comment.module.scss'


interface IProps {
    type: string
    fullname: string
    title: string
    content: string
}

const Comment: FC<IProps> = ({ type, fullname, title, content}) => {
    switch (type) {
        case 'positive':
            return <div className={`${s.Comment} ${s.CommentPos}`}>
            <div className={s.Comment__header}>
                <h1>{fullname}</h1>
            </div>
            <div className={s.Comment__content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
            break;
        case 'negative':
            return <div className={`${s.Comment} ${s.CommentNeg}`}>
            <div className={s.Comment__header}>
                <h1>{fullname}</h1>
            </div>
            <div className={s.Comment__content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
            break;
        default:
            return <div className={s.Comment}>
           <div className={s.Comment__header}>
                <h1>{fullname}</h1>
            </div>
            <div className={s.Comment__content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
            break;
    }
}


export default Comment