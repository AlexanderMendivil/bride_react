
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { LandingPage } from "../pages/LandingPage";
import { SlideShow } from "../pages/SlideShow";

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/slideshow/:userId" element={<SlideShow/>} />
      <Route path="/*" element={
      <PublicRoutes>
        <AuthRoutes/>
      </PublicRoutes>
      }/>
      <Route path="/dashboard/*" element={
      <PrivateRoutes>
        <AppRoutes/>
      </PrivateRoutes>
      }/>
    </Routes>

  )
}
  