import { useState } from 'react'
import Login from './domian/user/pages/Login'
import Info from './domian/user/pages/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Info/>
    </main>
  )
}

export default App
