import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilmSearchCard } from "./types";

interface IinitialState {
 filmCards: IFilmSearchCard[] | null
 error: string
}

const initialState: IinitialState = {
 filmCards: null,
 error: "",
}

const searchSlice = createSlice({
 name: "searchSlice",
 initialState,
 reducers: {
  setFilmCards(state, action: PayloadAction<IFilmSearchCard[]>){
   state.filmCards = action.payload
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  }
 }
})


export default searchSlice.reducer
export const {setFilmCards, setError} = searchSlice.actions