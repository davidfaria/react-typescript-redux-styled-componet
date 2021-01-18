// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const isObjectOrArray = (value: any): boolean => {
  const result = Array.isArray(value) || typeof value === 'object'
  return result
}

const setItem = (key: string, value: any) => {
  let data = value

  if (isObjectOrArray(value)) {
    data = JSON.stringify(value)
  }

  localStorage.setItem(key, data)
}

const getItem = (key: string) => {
  let value = localStorage.getItem(key)
  if (value && isObjectOrArray(value)) {
    value = JSON.parse(value)
  }
  return value
}

const removeItem = (key: string) => {
  localStorage.removeItem(key)
}

const clear = () => {
  localStorage.clear()
}

export { setItem, getItem, clear, removeItem }
