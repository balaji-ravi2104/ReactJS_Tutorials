import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
    const[count,increment,decrement,reset] = useCounter(5,1)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo