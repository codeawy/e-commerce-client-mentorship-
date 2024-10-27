import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader/Index";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";

const MainLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
