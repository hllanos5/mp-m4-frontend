import { Route, Routes } from 'react-router-dom';
import Login from './domain/user/pages/Login'
import ProfileInfo from './domain/user/pages/ProfileInfo'
import ProfileEdit from './domain/user/pages/ProfileEdit'
import ProtectedRoute from './domain/shared/routes/ProtectedRoute';
import Register from './domain/user/pages/Register';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/profile-info' element={<ProfileInfo />} />
          <Route path='/profile-edit' element={<ProfileEdit />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
