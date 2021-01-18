import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// slice stores
import themeReducer from 'store/ThemeSlice'
import counterReducer from 'store/CounterSlice'
import userReducer from 'store/UserSlice'

// Config
const store = configureStore({
  reducer: {
    theme: themeReducer,
    counter: counterReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
