import React from "react";

export default function Minus({ fill, size, color, className, props }) {
  return (
    <svg
      width={size ? size : "32"}
      className={className}
      height={size ? size : "32"}
      {...props}
      viewBox="0 0 32 32"
      fill={fill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 16H27"
        stroke={color ? color : "#49536E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
