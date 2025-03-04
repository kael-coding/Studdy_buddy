import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/auth/signupPage.jsx'
import LoginPage from './pages/auth/loginPage.jsx'
import HomePage from './pages/home/homePage.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import ResetPassword from './pages/auth/ResetPassword.jsx'
import VerificationCode from './pages/code/verifyCode.jsx'
import IntroPage from './pages/index.jsx'
function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/code" element={<VerificationCode />} />


      </Routes>
    </div>
  )
}

export default App
