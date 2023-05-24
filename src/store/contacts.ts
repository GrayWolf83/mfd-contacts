import { RootState } from './store'
import { ContactDto } from 'src/types/dto/ContactDto'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

interface ContastsState {
	entities: ContactDto[]
}

const initialState: ContastsState = {
	entities: [],
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		contactsListLoaded(state, action: PayloadAction<ContactDto[]>) {
			state.entities = action.payload
		},
	},
})

const { contactsListLoaded } = contactsSlice.actions

export const loadContactsList =
	(list: ContactDto[]) => (dispatch: Dispatch) => {
		dispatch(contactsListLoaded(list))
	}

export const getContactsList = () => (state: RootState) => {
	return state.contacts.entities
}

export const getContactById = (id: ContactDto['id']) => (state: RootState) => {
	return state.contacts.entities.find((item) => item.id === id)
}
