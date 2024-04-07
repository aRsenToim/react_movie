import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
 isWindowVidio: boolean
 url: string
 poster: string
}

const initialState: IInitialState = {
 isWindowVidio: false,
 url: "",
 poster: ""
}


const VidioSlice = createSlice({
 name: "VidioSlice",
 initialState,
 reducers: {
  setIsWindowVidio(state) {
   state.isWindowVidio = state.isWindowVidio ? false : true
  },
  setUrl(state, action: PayloadAction<string>) {
   state.url = action.payload
  },
  setPoster(state, action: PayloadAction<string>) {
   state.poster = action.payload
  }
 }
})


export default VidioSlice.reducer
export const { setIsWindowVidio, setUrl, setPoster } = VidioSlice.actions