import React from "react";

export default function Close({ fill, size, color, props }) {
  return (
    <svg
      width={width ? width : "32"}
      height={size ? size : "32"}
      {...props}
      viewBox="0 0 32 32"
      fill={fill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.875 6.125L6.125 21.875"
        stroke={color ? color : "#49536E"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.875 21.875L6.125 6.125"
        stroke={color ? color : "#49536E"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
