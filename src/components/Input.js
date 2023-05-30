import { ErrorMessage, useField } from "formik";
import React from "react";
// import { BiErrorCircle } from "react-icons/bi";
const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col pb-3">
      {/* <BiErrorCircle></BiErrorCircle> */}

      <label
        className="drop-shadow-none text-sm text-gray-600 mb-0"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`pl-2 border !border-gray-300 h-[38px] rounded-lg outline-none text-sm ${
          meta.touched && meta.error && "!border-red-500"
        }`}
        // autoComplete="off"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
