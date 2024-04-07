import { FC } from "react"
import { CatalogCards } from "../entities/filmCards"
import {useСategory} from '../shared/hooks/useСategory'



const Home: FC = () => {
 const {filmsСategory} = useСategory()
 return <div>
  {filmsСategory?.map(category => <CatalogCards key={category.id} title={category.title} filmCards={category.filmCards}/>)}
 </div>
}


export default Home