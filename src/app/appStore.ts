import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filmCardsSlice } from '../entities/filmCards'
import { filmSlice } from '../entities/film'
import { searchSlice } from '../entities/search'
import { profileSlice } from '../entities/profile'
import { ratingSlice } from '../processes/rating'
import { vidioSlice } from '../processes/vidio'


const rootReducers = combineReducers({
 filmCards: filmCardsSlice,
 film: filmSlice,
 searchSlice: searchSlice,
 profileSlice,
 ratingSlice,
 vidioSlice
})


export const setupStore = () => configureStore({
 reducer: rootReducers
})

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;