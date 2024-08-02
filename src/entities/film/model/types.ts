



export interface IFilm {
 name: string,
 type: string,
 keywords: string,
 IDReview: string
 infoCard: {
  year: number,
  genre: string,
  limitationYear: number,
  grade: number,
  counterGrader: number
 },
 description: string,
 poster: string,
 urlVideo: string,
 trailerUrl: string,
 comments: [],
 id: string
}

export interface IReviewsConteinter {
    id: string,
    reviews: IReview[]
}


export interface IReview {
    id: string,
    fullname: string
    type: string
    title: string
    content: string
}