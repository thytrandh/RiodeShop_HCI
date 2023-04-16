import { Outlet } from "react-router-dom";
import Header from "../containers/Layout/Header/Header";
import Footer from "../containers/Layout/Footer/Footer";

const Default = () => {
  return (
    <>
      <div className="page">
        <div className="header">
          <Header />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Default;
