function TextFeild({
  errors,
  label,
  name,
  type = "text",
  register,
  required,
  validationSchema,
  classes,
}) {
  return (
    <div className=" my-10">
      <label htmlFor={name} className="mb-4 text-slate-600 dark:text-slate-300 block">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        className={` bg-slate-200 shadow-blue-300 border-slate-500 dark:text-slate-300  rounded-lg w-full dark:bg-slate-500 outline-none text-slate-800 ${classes}`}
        // autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-sm block text-red-600 mt-4">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextFeild;
