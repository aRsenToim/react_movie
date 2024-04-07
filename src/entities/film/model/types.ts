



export interface IFilm {
 name: string,
 type: string,
 keywords: string,
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