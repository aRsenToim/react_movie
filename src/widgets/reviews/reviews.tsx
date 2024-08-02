import { FC, useId, useState } from 'react'
import s from './reviews.module.scss'
import Input from '../UI/input/input'
import Textarea from '../UI/textarea/textarea'
import Select from '../UI/select/select'
import Button from '../UI/button/button'
import { IReview } from '../../entities/film/model/types'
import generator from '../../shared/helpers/generator'

interface IProps {
    addreviews: (review: IReview) => void
}

const Reviews: FC<IProps> = ({addreviews}) => {
    const [fullname, setFullName] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const id = generator()
    return <div className={s.Reviews}>
        <h3 className={s.Reviews__title}>Add reviews</h3>
        <Input value={fullname} onChange={(value: string) => {setFullName(value)}} placeholder='You fullname' />
        <Select value={type} onchange={(value: string) => {setType(value)}} item={['neutral', 'positive', 'negative']}/>
        <Input value={title} onChange={(value: string) => {setTitle(value)}} placeholder='Title reviews' />
        <Textarea value={content} onChange={(value: string) => {setContent(value)}} placeholder='Text' />
        <Button text='Send' onclick={() => {addreviews({
            fullname,
            title,
            type,
            content,
            id: `${id}`,
        })}}/>
    </div>
}


export default Reviews