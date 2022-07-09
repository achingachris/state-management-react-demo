import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => {
      return count + 1
    })
  }

  return (
    <div className='container'>
      <h1>Counter</h1>
      <p>{count}</p>
      <button className='btn btn-outline-secondary' onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default App
