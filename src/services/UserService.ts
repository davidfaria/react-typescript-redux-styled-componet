import api from './api'

const authenticate = async (email: string, password: string) => {
  const response = await api.post('/sessions', {
    email,
    password
  })

  const sessions = response.data

  return sessions
}

export default { authenticate }
