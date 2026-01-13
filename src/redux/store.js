import {configureStore } from '@reduxjs/toolkit'
import serachReducer from './features/searchSlice'
export const store = configureStore ({
     reducer : {
      search : serachReducer,
     }
})