import { useState } from 'react'
import Login from './domian/user/pages/Login'
import ProfileInfo from './domian/user/pages/ProfileInfo'
import ProfileEdit from './domian/user/pages/ProfileEdit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ProfileEdit/>
    </main>
  )
}

export default App
