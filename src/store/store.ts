import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from './contacts'
import { favoritesSlice } from './favorites'
import { groupsSlice } from './groups'

const rootReducer = combineReducers({
	[contactsSlice.name]: contactsSlice.reducer,
	[groupsSlice.name]: groupsSlice.reducer,
	[favoritesSlice.name]: favoritesSlice.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
