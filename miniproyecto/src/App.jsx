import { useState } from 'react'
import Login from './domian/user/pages/Login'
Login
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
