import { useField } from "formik";
import React from "react";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col pb-3">
      <label
        className="drop-shadow-none text-sm text-gray-600 mb-0"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        className="pl-2 py-2 border h-10 rounded-lg outline-none text-sm drop-shadow-sm"
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
