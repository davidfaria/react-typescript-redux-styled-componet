import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, AppDispatch, RootState } from 'store'
import UserService from 'services'
import api from 'services/api'
import { toastError } from 'utils/toast'
import { getItem, removeItem, setItem } from 'utils/localStorage'
import { USER_KEY, TOKEN_KEY } from 'utils/constantes'

const user = { id: '', email: '', name: '' }
const userStorage = getItem(USER_KEY)
const token = getItem(TOKEN_KEY)

if (userStorage) {
  const data = JSON.parse(userStorage)
  user.id = data.id
  user.name = data.name
  user.email = data.email
}

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
      state.isLoading = false
      state.isError = false
    },
    setLoading: (state) => {
      state.isLoading = true
      state.isError = false
    },
    setError: (state) => {
      state.isError = true
      state.isLoading = false
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

    setItem(USER_KEY, session.user)
    setItem(TOKEN_KEY, session.token)

    api.defaults.headers.authorization = `Bearer ${session.token}`

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
  removeItem(USER_KEY)
  removeItem(TOKEN_KEY)
  dispatch(setClearSession())
}

// Getters
export const getLoading = (state: RootState) => state.user.isLoading
export const getIsLogged = (state: RootState) => {
  const islogged = !!state.user.user.id
  return islogged
}
export const getUser = (state: RootState) => state.user.user
export const getToken = (state: RootState) => state.user.token

export default userSlice.reducer
