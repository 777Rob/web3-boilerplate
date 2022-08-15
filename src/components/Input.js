import React from "react";

export default function Input({ label, value, setValue, placeholder, Icon }) {
  let inputStyle = `border-slate-200 border-2 focus:border-slate-100 ${
    Icon && "pl-8"
  } rounded-md py-2 bg-white text-accentDark-500 font-semibold`;
  let iconStyle = "absolute  fill-accentDark-200 w-6 h-6 ml-2";
  let labelStyle = "text-lg font-semibold  text-accentDark-100";

  const onChange = (e) => {
    setValue && setValue(e.target.value);
  };
  return (
    <div>
      {label && <label className={labelStyle}>{label}</label>}
      <div className="flex items-center">
        {Icon && <Icon className={iconStyle} />}
        <input
          value={value}
          onChange={onChange}
          className={inputStyle}
          placeholder={placeholder && placeholder}
        />
      </div>
    </div>
  );
}
