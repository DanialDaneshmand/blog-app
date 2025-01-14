function TextArea({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired = false,
}) {
  return (
    <div className="textField">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        dir={dir}
        className={`block border outline-none rounded-xl p-4 w-full bg-[#efefef] mt-4  min-h-[180px] leading-8 ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
export default TextArea;
