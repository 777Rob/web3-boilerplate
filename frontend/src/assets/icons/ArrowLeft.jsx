import React from "react";

export default function ArrowLeft({ fill, size, color, className, props }) {
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
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke={color ? color : "#49536E"}
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M18 11.5L13 16L18 20.5"
        stroke={color ? color : "#49536E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
