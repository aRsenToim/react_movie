import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilmsСategory } from "./types";

interface IinitialState {
 error: string
 filmsСategory: IFilmsСategory[] | null
}

const initialState: IinitialState = {
 error: "",
 filmsСategory: null
}



const filmCardsSlice = createSlice({
 name: "filmCardsSlice",
 initialState,
 reducers: {
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  },
  setFilmsСategory(state, action: PayloadAction<IFilmsСategory[]>){
   state.filmsСategory = action.payload
  }
 }
})


export default filmCardsSlice.reducer
export const {setError, setFilmsСategory} = filmCardsSlice.actions