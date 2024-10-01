import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      Auth
      <Outlet />
    </div>
  );
};

export default AuthLayout;
