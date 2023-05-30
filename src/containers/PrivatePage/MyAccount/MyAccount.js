import { useForm } from "react-hook-form";
import TopBanner from "../../../components/TopBanner/TopBanner";
import "../MyAccount/MyAccount.scss";
import Dashboard from "../MyAccount/SubPage/Dashboard/Dashboard";
import ProfileSettings from "./SubPage/ProfileSettings/ProfileSettings";
import MyOrders from "./SubPage/MyOrders/MyOrders";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slice/Auth/authSlice";


const MyAccount = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const idUser = userData?.id;
  const userName = userData?.firstName + " " + userData?.lastName;
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const email = userData?.email;

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const setShowContent = (contentNumber) => {
    switch (contentNumber) {
      case 1:
        setShow1(true);
        setShow2(false);
        setShow3(false);
        break;
      case 2:
        setShow1(false);
        setShow2(true);
        setShow3(false);
        break;
      case 3:
        setShow1(false);
        setShow2(false);
        setShow3(true);
        break;

      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.clear();
    dispatch(logout());
    navigate("/auth/login");
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  
  

  return (
    <div className="my-account-page">
      <TopBanner page={"MY ACCOUNT"} />
      <div className="container">
        <div className="row ml-0 mr-0">
          <div className="left-content col-lg-3">
            <div
              className={show1 ? "btn-item btn-enable" : "btn-item"}
              onClick={() => {
                setShowContent(1);
              }}
            >
              <p className="mb-0">Dashboard</p>
            </div>
            <div
              className={show2 ? "btn-item btn-enable" : "btn-item"}
              onClick={() => {
                setShowContent(2);
              }}
            >
              <p className="mb-0">My Orders</p>
            </div>
            <div
              className={show3 ? "btn-item btn-enable" : "btn-item"}
              onClick={() => {
                setShowContent(3);
              }}
            >
              <p className="mb-0">Profile Settings</p>
            </div>
            {/* <div className="btn-item">
              <p className="mb-0">Reset Password</p>
            </div> */}
            <div
              className="btn-item"
              onClick={() => {
                handleLogout();
              }}
            >
              <p className="mb-0">Logout</p>
            </div>
          </div>
          <div className="right-content col-lg-9">
            <div className={show1 ? "animate-to" : "animate-from"}>
              {" "}
              {show1 && <Dashboard userName={userName} />}
            </div>
            <div className={show2 ? "animate-to" : "animate-from"}>
              {" "}
              {show2 && <MyOrders />}
            </div>
            <div className={show3 ? "animate-to" : "animate-from"}>
              {" "}
              {show3 && (
                <ProfileSettings
                  idUser={idUser}
                  userName={userName}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
