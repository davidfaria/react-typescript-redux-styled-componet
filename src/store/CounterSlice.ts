import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, AppDispatch, RootState } from 'store'

// Store
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Functions Async
export const incrementAsync = (amount: number): AppThunk => (
  dispatch: AppDispatch
) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// Getters
export const getCountValue = (state: RootState) => state.counter.value

export default counterSlice.reducer
