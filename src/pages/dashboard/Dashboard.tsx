import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getIsLogged, setLogout } from 'store/UserSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector(getIsLogged)
  const history = useHistory()

  const handleLogout = () => {
    dispatch(setLogout())
    history.push('/singin')
  }

  return (
    <div>
      {isLogged ? <h4>Is Logged: true</h4> : <h4>Is Logged: false</h4>}
      <h1>Dashboard</h1>

      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  )
}

export default Dashboard
