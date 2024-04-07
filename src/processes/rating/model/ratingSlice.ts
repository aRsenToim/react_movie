import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
 isWindow: boolean
}

const initialState: IinitialState = {
 isWindow: false
}

const ratingSlice = createSlice({
 name: "ratingSlice",
 initialState,
 reducers: {
  setIsWindow(state) {
   state.isWindow = state.isWindow ? false : true
  }
 }
})


export default ratingSlice.reducer
export const {setIsWindow} = ratingSlice.actions