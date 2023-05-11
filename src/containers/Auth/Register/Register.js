import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../settings/constant";
import React, { useState } from "react";

import "../../Auth/AuthPage.scss";

const Register = () => {
  const [values, setValues] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    setValues(data);

    console.log(data);

    // dispatch(
    //   login({
    //     email,
    //     password,
    //   })
    // );

    // reset({
    //   email: "",
    //   password: "",
    // });
  };
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
          <div className="input-item mb-1">
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
                {...register("confirmpassword", { required: true })}
              />
              <i class="fa-light fa-lock"></i>
            </div>
            {errors.confirmpassword?.type === "required" && (
              <span className="err-msg">Confirm Password is required</span>
            )}
            {values.confirmpassword != values.password && (
              <span className="err-msg">Password do not match</span>
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

export default Register;
