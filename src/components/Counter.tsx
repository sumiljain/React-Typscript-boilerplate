import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const name = "sumil"
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        Count: {count}{' '}
      </button>
    </div>
  )
}
