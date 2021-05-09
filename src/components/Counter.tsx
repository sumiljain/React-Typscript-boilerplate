import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const name = 'Jain'
  return (
    <div>
      <button
        onClick={() => {
          name
          setCount((c) => c + 1)
        }}
      >
        Count: {count}{' '}
      </button>
    </div>
  )
}
