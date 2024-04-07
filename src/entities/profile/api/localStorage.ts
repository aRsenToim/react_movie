




export const localStorageApi = {
 keyFavorite: "favoriteRM",
 keyGrade: "GradeRM",
 getFavotites(){
  const data = localStorage.getItem(this.keyFavorite)

  if (!data) return []

  return JSON.parse(data)
 },
 setFavotites(favorite: string[]){
  localStorage.setItem(this.keyFavorite, JSON.stringify(favorite))
 },
 getGrade(){
  const data = localStorage.getItem(this.keyGrade)

  if (!data) return []

  return JSON.parse(data)
 },
 setGrade(favorite: string[]){
  localStorage.setItem(this.keyGrade, JSON.stringify(favorite))
 }
}