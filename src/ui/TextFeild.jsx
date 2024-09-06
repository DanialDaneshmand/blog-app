import React from "react";

function TextFeild({
  register,
  className,
  name,
  type = "text",
  onChange,
  isRequired,
  value,
  dir = "rtl",
  label,
  errors,
  validationSchema = [],
  ...rest
}) {
  return (
    <div className="my-8 w-[500px]">
      <label className=" block mb-2 text-slate-600" htmlFor={name}>
        {label}
        {isRequired && <span className=" text-red-600">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        {...rest}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        required={isRequired}
        value={value}
        dir={dir}
        className={` border py-2 px-3  outline-none rounded-lg my-2  ${
          dir === "rtl" ? "text-right" : "text-left"
        } ${className}`}
      />
      {
        errors&&errors[name]&&(
          <span className="text-red-600 text-sm block mt-2">
            {errors[name]?.message}
          </span>
        )
      }
    </div>
  );
}

export default TextFeild;
