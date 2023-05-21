import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../../settings/constant";
import React, { useEffect, useState } from "react";

import "../../Auth/AuthPage.scss";
import { registerUser } from "../../../redux/slice/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";
import { Alert, Space, message } from "antd";

const Register = () => {
  const [values, setValues] = useState({});

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.currentUser?.statusCodeValue);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { firstname, lastname, email, password } = data;

    const firstName = firstname;
    const lastName = lastname;

    dispatch(
      registerUser({
        email,
        firstName,
        lastName,
        password,
      })
    );

    reset({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmpassword: "",
    });
  };

  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin) {
      navigate("/private/my-account");
    }
  }, [isLogin]);

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Welcome To Riode</p>
        <p className="mb-0">Aplatform to connect with the social world. </p>
      </div>
      <div className="content">
        <form
          action="#"
          className="form-auth"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-item mb-1">
            <label for="email">
              <p className="mb-0">Email Address</p>
            </label>
            <div className="inputbox mb-1">
              <input
                type="email"
                className="content-input"
                placeholder="Email Address"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //   message: "invalid email address",
                  },
                })}
              />
              <i class="fa-thin fa-user-plus"></i>
            </div>
            {errors.email?.type === "required" && (
              <span className="err-msg">Email Address is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="err-msg">Invalid Email Address</span>
            )}
          </div>
          <div className="d-flex">
            <div className="input-item mb-1 mr-1">
              <label for="firstname">
                <p className="mb-0">First Name</p>
              </label>
              <div className="inputbox mb-1">
                <input
                  type="text"
                  className="content-input"
                  placeholder="First Name"
                  name="firstname"
                  {...register("firstname", {
                    required: true,
                  })}
                />
                <i class="fa-thin fa-user-plus"></i>
              </div>
              {errors.firstname?.type === "required" && (
                <span className="err-msg">First Name is required</span>
              )}
            </div>
            <div className="input-item mb-1 ml-1">
              <label for="username">
                <p className="mb-0">Last Name</p>
              </label>
              <div className="inputbox mb-1">
                <input
                  type="text"
                  className="content-input"
                  placeholder="Last Name"
                  name="lastname"
                  {...register("lastname", {
                    required: true,
                  })}
                />
                <i class="fa-thin fa-user-plus"></i>
              </div>
              {errors.lastname?.type === "required" && (
                <span className="err-msg">Last Name is required</span>
              )}
            </div>
          </div>

          <div className="input-item mb-1">
            <label for="password">
              <p className="mb-0">Your Password</p>
            </label>
            <div className="inputbox">
              <input
                type="password"
                className="content-input"
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              />
              <i class="fa-light fa-lock"></i>
            </div>
            {errors.password?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
          </div>
          <div className="input-item mb-1">
            <label for="confirmpassword">
              <p className="mb-0">Confirm Password</p>
            </label>
            <div className="inputbox">
              <input
                type="password"
                className="content-input"
                placeholder="Confirm Password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: true,
                  validate: (value) => {
                    const password = getValues("password");
                    if (value !== password) {
                      return "Password is not matched!";
                    }
                  },
                })}
              />
              <i class="fa-light fa-lock"></i>
            </div>
            {errors.confirmpassword?.type === "required" && (
              <span className="err-msg">Confirm Password is required</span>
            )}
            {errors.confirmpassword?.message && (
              <span className="err-msg">{errors.confirmpassword?.message}</span>
            )}
          </div>

          <div className="item">
            <div className="remember">
              <input type="checkbox" class="" id="checkRemember" />
              <label className="mb-0" for="checkRemember">
                <p className="mb-0">I agree with terms and conditions</p>
              </label>
            </div>
          </div>
          <div className="submit">
            <button type="primary" htmlType="submit" className="btn-submit">
              SIGN UP
            </button>
          </div>
          <div to className="link-to-page">
            <label>
              <p className="mb-0">Already Have An Account?</p>
            </label>
            <Link to={LOGIN_PAGE}>
              <p className="mb-0">Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
