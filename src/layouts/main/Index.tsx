import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      main layout
      <Outlet />
    </div>
  );
};
export default MainLayout;
