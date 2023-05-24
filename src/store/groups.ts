import { RootState } from './store'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

interface GroupsState {
	entities: GroupContactsDto[]
}

const initialState: GroupsState = {
	entities: [],
}

export const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		groupsListLoaded(state, action: PayloadAction<GroupContactsDto[]>) {
			state.entities = action.payload
		},
	},
})

const { groupsListLoaded } = groupsSlice.actions

export const loadGroupsList =
	(list: GroupContactsDto[]) => (dispatch: Dispatch) => {
		dispatch(groupsListLoaded(list))
	}

export const getGroupsList = () => (state: RootState) => {
	return state.groups.entities
}

export const getGroupById =
	(id: GroupContactsDto['id']) => (state: RootState) => {
		return state.groups.entities.find((item) => item.id === id)
	}
