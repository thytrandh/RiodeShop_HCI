import { Outlet } from "react-router-dom";
import Header from "../containers/Layout/Header/Header";
import Footer from "../containers/Layout/Footer/Footer";
import { useState } from "react";

const Default = () => {
  const [fixHeader, setFixHeader] = useState(false);

  const setFixedHeader = () => {
    if (window.scrollY >= 250) {
      setFixHeader(true);
    } else {
      setFixHeader(false);
    }
  };
  window.addEventListener("scroll", setFixedHeader);

  return (
    <>
      <div className="page">
        <div className={fixHeader ? "header fixed" : "header"}>
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
