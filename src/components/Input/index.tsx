import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import Error from 'components/Error'
import * as S from './styles'

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: string
  name: string
  register: RefReturn
  errors?: FieldError
}
const Input = ({
  label,
  type = 'text',
  name,
  register,
  errors,
  ...props
}: InputProps) => {
  return (
    <>
      {!!label && <S.Label>{label}</S.Label>}
      <S.Container>
        <input type={type} name={name} ref={register} {...props} />
      </S.Container>
      {!!errors && <Error>{errors?.message}</Error>}
    </>
  )
}

export default Input
