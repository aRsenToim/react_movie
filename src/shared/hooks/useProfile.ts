import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/appStore";
import { setProfileFetch } from "../../entities/profile";




export function useProfile() {
 const dispatch = useAppDispatch()
 const { favorites, grades } = useAppSelector(state => state.profileSlice)


 useEffect(() => {
  if (!favorites || !grades) {
   dispatch(setProfileFetch())
  }
 }, [])

 return {favorites, grades}
}