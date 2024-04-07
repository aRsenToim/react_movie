import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
 favorites: string[] | null,
 grades: string[] | null
}

const initialState: IinitialState = {
 favorites: null,
 grades: null
}


const profileSlice = createSlice({
 name: "profileSlice",
 initialState,
 reducers: {
  setFavorites(state, action: PayloadAction<string[]>) {
   state.favorites = action.payload
  },
  setGrades(state, action: PayloadAction<string[]>) {
   state.grades = action.payload
  }
 }
})


export default profileSlice.reducer
export const {setFavorites, setGrades} = profileSlice.actions