import axios from 'axios'
import { getItem } from 'utils/localStorage'
import { TOKEN_KEY } from 'utils/constantes'

const token = getItem(TOKEN_KEY)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

if (token) {
  api.defaults.headers.authorization = `Bearer ${token}`
}

export default api
