import { FC } from "react"
import { ProfileComponent } from "../entities/profile"
import { useProfile } from "../shared/hooks/useProfile"
import { useFilmCardsSearch } from "../shared/hooks/useFilmCardsSearch"





const Profile: FC = () => {
 const { favorites, grades } = useProfile()
 const { filmCards } = useFilmCardsSearch()

 const handleFavoritesCards = () => {
  const arr = []
  filmCards?.forEach((item) => {
   favorites?.forEach(favoritesItem => {
    if (item.id == favoritesItem) {
     arr.push(item);
    }
   })
  })
  return arr
 }
 const handleGradesCards = () => {
  const arr = []
  filmCards?.forEach((item) => {
   grades?.forEach(favoritesItem => {
    if (item.id == favoritesItem) {
     arr.push(item);
    }
   })
  })
  return arr
 }


 return <ProfileComponent gradeCards={handleGradesCards()} favoriteCards={handleFavoritesCards()} />
}


export default Profile