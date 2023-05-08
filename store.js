import { configureStore } from '@reduxjs/toolkit'
import optionsReducer from './Options'

export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
})