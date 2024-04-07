



export interface IFilmCard {
 title: string
 img: string
 type: string
 id: string
}


export interface IFilmsСategory {
 title: string
 filmCards: IFilmCard[]
 id: string
}

