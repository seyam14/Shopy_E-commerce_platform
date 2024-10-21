import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="mt-20 lg:mt-0"></div>
      <Footer />
    </div>
  );
};

export default MainLayout;
