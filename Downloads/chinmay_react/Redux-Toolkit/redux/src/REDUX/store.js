import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps
// store create
// wrap app component in Provider
// create slice
// register reducer in store