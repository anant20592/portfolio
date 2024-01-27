import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <main className="wrap">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
