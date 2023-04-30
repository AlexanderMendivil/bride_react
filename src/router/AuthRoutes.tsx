import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { Login } from "../pages/Login"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path='/*' element={<Navigate to='/login'/>} />
    </Routes>

  )
}
