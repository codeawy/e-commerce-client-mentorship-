import { ROUTES } from "@/constants/routes";
import AuthLayout from "@/layouts/AuthLayout/Index";
import MainLayout from "@/layouts/main/Index";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRout from "./ProtectedRout";
import Home from "@/pages/Home/Index";

// Group Auth Pages
const AuthPages = {
  Login: lazy(() => import("@/pages/Auth/login/Index")),
  Register: lazy(() => import("@/pages/Auth/register/Index")),
};

const router = createBrowserRouter([
  {
    path: ROUTES.Main,
    element: (
      <ProtectedRout isAuthenticated={false}>
        <MainLayout />
      </ProtectedRout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTES.Main,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <AuthPages.Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <AuthPages.Register />,
      },
    ],
  },
]);

export default router;
