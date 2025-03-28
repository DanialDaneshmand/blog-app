function RHFSelect({ categories,label, name, register, options, isRequired }) {
  
  return (
    <div>
      <label htmlFor={name} className="mb-3 block text-slate-600  dark:text-slate-300 ">
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      <select {...register(name)} id={name} className=" dark:text-slate-300 w-full p-3 rounded-lg dark:bg-slate-500 bg-slate-200 outline-none focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm">
        {options.map((option) => (
          <option  key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
