
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
 

  return (
    <>
    <Routes>
<Route path="/" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} />
</Routes>
    </>
  )
}

export default App
