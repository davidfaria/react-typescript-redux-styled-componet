import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, getLoading } from 'store/UserSlice'

export default function SingIn() {
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoading)

  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })

  const handleSubimit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(form.email, form.password))
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <form onSubmit={handleSubimit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  )
}
