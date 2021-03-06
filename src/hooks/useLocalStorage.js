import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return initialValue
    }
  })
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage

// https://dev.to/sanderdebr/building-a-custom-react-localstorage-hook-2bja
