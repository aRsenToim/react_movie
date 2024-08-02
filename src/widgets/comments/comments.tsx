import { FC } from 'react'
import s from './comments.module.scss'
import Comment from '../comment/comment'
import { IReview } from '../../entities/film/model/types'


interface IProps {
    comments: IReview[]
}

const Comments: FC<IProps> = ({comments}) => {
    return <div className={s.Comments}>
        <h1 className={s.Comments__title}>Reviews:</h1>
        <div className={s.Comments__items}>
            {comments.map(comment =>  <Comment key={comment.id} type={comment.type} title={comment.title} content={comment.content} fullname={comment.fullname}/>)}
        </div>
    </div>
}


export default Comments