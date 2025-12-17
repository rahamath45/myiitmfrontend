
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileView from './pages/ProfileView'

function App() {
 

  return (
    <>
    <Routes>
<Route path="/" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} />
 <Route path="/profile/view" element={<ProfileView />} />
</Routes>
    </>
  )
}

export default App
