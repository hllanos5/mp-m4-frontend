import { Route, Routes } from 'react-router-dom';
import Login from './domain/user/pages/Login'
import ProfileInfo from './domain/user/pages/ProfileInfo'
import ProfileEdit from './domain/user/pages/ProfileEdit'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile-info' element={<ProfileInfo />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
      </Routes>
    </main>
  )
}

export default App
