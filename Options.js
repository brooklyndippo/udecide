import { createSlice } from '@reduxjs/toolkit' // 1

const initialState = {
  value: [],
}

export const optionsSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		addOption: (state, action) => {
			state.value.unshift(action.payload)
		},
		deleteOption: (state, action) => {
			state.value.splice(action, 1)
		}
	}
})

export const { addOption, deleteOption } = optionsSlice.actions
export default optionsSlice.reducer