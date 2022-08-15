import React from "react";

export default function Input({ label, value, setValue, placeholder, Icon }) {
  let inputStyle = `border-slate-200 border-2 focus:border-slate-100 ${
    Icon && "pl-8"
  } rounded-md py-2 bg-white text-accentDark-500 font-semibold`;
  let iconStyle = "absolute gap-10 fill-accentDark-200 w-6 h-6 ml-2";
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
/* Input Field (Single Line) */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// padding: 0px;
// gap: 4px;

// position: absolute;
// width: 375px;
// height: 48px;
// left: 97px;
// top: 467px;

// /* Input */

// box-sizing: border-box;

// width: 375px;
// height: 48px;

// /* Solid Colours/Standard/White */
// background: #FFFFFF;
// /* Solid Colours/Brand/Gray/Gray-400 */
// border: 1px solid #E2E4E8;
// border-radius: 3px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 1;

// /* Root / Input Field (Single Line) Cell */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 16px;

// position: absolute;
// height: 26px;
// left: 12px;
// right: 12px;
// top: calc(50% - 26px/2);

// /* Text */

// width: 351px;
// height: 26px;

// font-family: 'General Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 160%;
// /* identical to box height, or 26px */

// /* Solid Colours/Brand/Gray/Gray-600 */
// color: #B2B7C2;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;
