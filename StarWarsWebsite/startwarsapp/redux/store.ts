import { configureStore } from '@reduxjs/toolkit'
import StarWarsReducer from './starwarsSlice'

export const store = configureStore({
  reducer: {
    StarWarsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch