import { Route, Routes } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = () => {
    
   return (
      <Routes>
         <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
         </Route>
         <Route path="/Login" element={<LoginPage />} />
         <Route path="/Register" element={<RegisterPage />} />
      </Routes>
   )
}