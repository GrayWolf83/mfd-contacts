import { RootState } from './store'
import { ContactDto } from 'src/types/dto/ContactDto'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
	entities: ContactDto['id'][]
}

const initialState: FavoritesState = {
	entities: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<ContactDto['id']>) {
			const hasFavorite = state.entities.includes(action.payload)

			if (hasFavorite) {
				state.entities = state.entities.filter(
					(item) => item !== action.payload,
				)
			} else {
				state.entities = [...state.entities, action.payload]
			}
		},
	},
})

const { toggleFavorite } = favoritesSlice.actions

export const toggleFavoriteById =
	(favorite: ContactDto['id']) => (dispatch: Dispatch) => {
		dispatch(toggleFavorite(favorite))
	}

export const getFavoritesList = () => (state: RootState) => {
	return state.favorites.entities
}

export const hasFavoriteById = (id: ContactDto['id']) => (state: RootState) => {
	return state.favorites.entities.includes(id)
}
