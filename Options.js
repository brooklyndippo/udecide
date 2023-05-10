import { createSlice } from '@reduxjs/toolkit' // 1

const initialState = {
  value: [],
}

export const optionsSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		addOption: (state, action) => {
			!state.value.includes(action.payload) &&
			state.value.unshift(action.payload)
		},
		clearAllOptions: (state) => {
			state.value = []
		},
		deleteOption: (state, action) => {
			state.value.splice(action, 1)
		}
	}
})

export const { addOption, deleteOption, clearAllOptions } = optionsSlice.actions
export default optionsSlice.reducer