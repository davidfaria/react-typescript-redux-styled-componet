import React from 'react'
import { useHistory } from 'react-router-dom'
import { onLogin, getLoading, getIsLogged } from 'store/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './Validation'

import Input from 'components/Input'

import * as S from './SingIn.styles'

type Inputs = {
  email: string
  password: string
}

const SingIn = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()
  const isLoading = useSelector(getLoading)
  const isLogged = useSelector(getIsLogged)
  const history = useHistory()

  const handleSubimit = (data: Inputs) => {
    console.log('dados', data)
    dispatch(onLogin(data.email, data.password))
    if (isLogged) {
      history.push('/dashboard')
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {isLogged ? <h4>Is Logged: true</h4> : <h4>Is Logged: false</h4>}
      <S.Form onSubmit={handleSubmit(handleSubimit)}>
        <Input
          label="Email"
          type="email"
          name="email"
          register={register}
          errors={errors.email}
          placeholder="Digite seu e-mail"
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          register={register}
          errors={errors.password}
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>
      </S.Form>
    </>
  )
}

export default SingIn
