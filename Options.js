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
		}
	}
})

export const { addOption } = optionsSlice.actions
export default optionsSlice.reducer