import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, getCountValue } from 'store/CounterSlice'
import { toastSuccess } from 'utils/toast'

const Counter = () => {
  const count = useSelector(getCountValue)
  const dispatch = useDispatch()

  const handleDecrement = React.useCallback(() => {
    dispatch(decrement())
  }, [dispatch])

  const handleIncrement = React.useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  React.useMemo(() => {
    if (count >= 10) {
      toastSuccess('Ok até aqui')
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button type="button" onClick={handleDecrement}>
        Decrement ( - )
      </button>
      {'===================='}
      <button type="button" onClick={handleIncrement}>
        Increment ( + )
      </button>
    </div>
  )
}

export default Counter
