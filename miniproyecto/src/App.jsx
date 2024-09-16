import { Route, Routes } from 'react-router-dom';
import Login from './domian/user/pages/Login'
import ProfileInfo from './domian/user/pages/ProfileInfo'
import ProfileEdit from './domian/user/pages/ProfileEdit'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </main>
  )
}

export default App
