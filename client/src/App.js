import React from 'react'

import Home from './pages/homepage/home'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegistrationPage />} />
    </Routes>
    </>
  )
}

export default App
