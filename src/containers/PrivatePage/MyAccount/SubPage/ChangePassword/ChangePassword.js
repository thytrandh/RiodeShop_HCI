const ChangePassword = () => {
  return (
    <div className="change-password-content">
      {/* <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <input
              id="passwordInput"
              className="form-control"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <label for="passwordInput">Current Password</label>
            {errors.password?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="newpasswordInput"
              className="form-control"
              placeholder="New Password"
              type="password"
              {...register("newpassword", { required: true, minLength: 8 })}
            />
            <label for="newpasswordInput">New Password</label>
            {errors.newpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {errors.newpassword?.type === "minLength" && (
              <span className="err-msg">
                Password should be at least 8 characters
              </span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="confirmpasswordInput"
              className="form-control"
              placeholder="Confirm New Password"
              type="password"
              {...register("confirmpassword", {
                required: true,
                validate: (value) => {
                  const newPassword = getValues("newpassword");
                  if (value !== newPassword) {
                    return "Password is not matched!";
                  }
                },
              })}
            />
            <label for="confirmpasswordInput">Confirm New Password</label>
            {errors.confirmpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {errors.confirmpassword?.message && (
              <span className="err-msg">{errors.confirmpassword?.message}</span>
            )}
          </div>
          <div className="footer pt-3">
            <button className="btn-save-change">
              <p className="mb-0">SAVE CHANGES</p>
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default ChangePassword;
