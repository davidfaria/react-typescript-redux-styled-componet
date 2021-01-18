import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

const initialState = {
  value: 'light'
}

// Store
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload.value
    }
  }
})

// Actions
export const { setTheme } = themeSlice.actions

export const getTheme = (state: RootState): string => state.theme.value

export default themeSlice.reducer
