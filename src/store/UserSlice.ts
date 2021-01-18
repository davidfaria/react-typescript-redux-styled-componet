import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, AppDispatch, RootState } from 'store'
import UserService from 'services'
import { toastError } from 'utils/toast'
import { getItem, removeItem, setItem } from 'utils/localStorage'

const user = getItem('user') || {
  id: '',
  name: '',
  email: ''
}
const token = getItem('token')

const initStorage = {
  user,
  token
}

const initialState = {
  ...initStorage,
  isLogged: false,
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
      state.isLogged = true
      state.isLoading = false
      state.isError = false
    },
    setClearSession: (state) => {
      state.user = {
        id: '',
        name: '',
        email: ''
      }
      state.token = ''
      state.isLogged = false
      state.isLoading = false
      state.isError = false
    },
    setLoading: (state) => {
      state.isLoading = true
      state.isError = false
      state.isLogged = false
    },
    setError: (state) => {
      state.isError = true
      state.isLoading = false
      state.isLogged = false
    }
  }
})

// Actions
export const {
  setSession,
  setError,
  setLoading,
  setClearSession
} = userSlice.actions

// Functions Async
export const onLogin = (email: string, password: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(setLoading())
    const session = await UserService.authenticate(email, password)
    setItem('user', session.user)
    setItem('token', session.token)
    dispatch(setSession(session))
  } catch (error) {
    dispatch(setError())
    const message =
      error?.response?.data?.message ||
      'Ops..., Ocorreu um erro ao tentar logar no sistema'
    toastError(message)
  }
}

export const setLogout = (): AppThunk => (dispatch: AppDispatch) => {
  removeItem('user')
  removeItem('token')
  dispatch(setClearSession())
}

// Getters
export const getLoading = (state: RootState) => state.user.isLoading
export const getIsLogged = (state: RootState) => state.user.isLogged

export default userSlice.reducer
