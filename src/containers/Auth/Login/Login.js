import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_PAGE } from "../../../settings/constant";

import "../../Auth/AuthPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slice/Auth/authSlice";
import { useEffect } from "react";
import { message } from "antd";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const authError = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    dispatch(
      login({
        email,
        password,
      })
    );

    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (currentUser?.body?.token) {
      navigate("/private/my-account");
    }
    if (authError === true) {
      message.error(
        "LOGIN FAIL! Please recheck email adress and password and try again."
      );
      setTimeout(window.location.reload(true), 1000);
    }
  });

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Welcome Back!</p>
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
          <div className="item">
            <div className="remember">
              <input type="checkbox" class="" id="checkRemember" />
              <label className="mb-0" for="checkRemember">
                <p className="mb-0">Remember Me</p>
              </label>
            </div>
            {/* <div className="forgot-password">
              <Link to={FORGOT_PASSWORD_PAGE}>
                <p className="mb-0">Forgot Password? </p>
              </Link>
            </div> */}
          </div>
          <div className="submit">
            <button type="primary" htmlType="submit" className="btn-submit">
              SIGN IN
            </button>
          </div>
          <div to className="link-to-page">
            <label>
              <p className="mb-0">Don't Have An Account?</p>
            </label>
            <Link to={REGISTER_PAGE}>
              <p className="mb-0">Register</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
