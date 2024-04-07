import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilm } from "./types";


interface IinitialState {
 film: IFilm | null
 error: string
}

const initialState: IinitialState = {
 film: null,
 error: ""
}

const filmSlice = createSlice({
 name: "filmSlice",
 initialState,
 reducers: {
  setFilm(state, action: PayloadAction<IFilm>){
   state.film = action.payload
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  }
 }
})


export default filmSlice.reducer
export const {setError, setFilm} = filmSlice.actions