import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, AppDispatch, RootState } from 'store'
import UserService from 'services'
import { toastError } from 'utils/toast'

const initialState = {
  user: {
    name: '',
    email: ''
  },
  token: '',
  isLoading: false,
  isError: false
}

// Store
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoading = false
      state.isError = false
    },
    setLoading: (state) => {
      state.isLoading = true
      state.isError = false
    },
    setError: (state) => {
      state.isLoading = false
      state.isError = true
    }
  }
})

// Actions
export const { setSession, setError, setLoading } = userSlice.actions

// Functions Async
export const login = (email: string, password: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(setLoading())
    const session = await UserService.onLogin(email, password)
    dispatch(setSession(session))
  } catch (error) {
    dispatch(setError())
    const message =
      error?.response?.data?.message ||
      'Ops..., Ocorreu um erro ao tentar logar no sistema'
    toastError(message)
  }
}

// Getters
export const getLoading = (state: RootState) => state.user.isLoading

export default userSlice.reducer
