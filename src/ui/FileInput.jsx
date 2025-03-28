import React from "react";
import { HiArrowUpTray } from "react-icons/hi2";

function FileInput({
  label,
  name,
  value,
  onChange,
  dir = "rtl",
  isRequired,
  classes,
  errors
}) {
  return (
    <>
      <label
        htmlFor="file-upload"
        className={`cursor-pointer border-2  border-blue-600 dark:border-blue-400 rounded-lg px-3 py-2 text-blue-600 dark:text-blue-400 flex items-center justify-center gap-x-2 ${classes}`}
      >
        {label}
        <HiArrowUpTray />
        <input
          type="file"
          id="file-upload"
          className="sr-only hidden"
          value={value}
          dir={dir}
          name={name}
          onChange={onChange}
        />
      </label>
      {errors && errors[name] && (
        <span className="text-sm block text-red-600 mt-4">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default FileInput;
