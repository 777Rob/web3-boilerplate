import React from "react";

export default function Menu({ fill, size, color, props }) {
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
        d="M5 8.5H27"
        stroke={color ? color : "#49536E"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 13.5H27"
        stroke={color ? color : "#49536E"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 18.5H27"
        stroke={color ? color : "#49536E"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 23.5H27"
        stroke={color ? color : "#49536E"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
