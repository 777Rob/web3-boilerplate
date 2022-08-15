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
        d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
        stroke={color ? color : "#49536E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9258 21.925L28.0008 28"
        stroke={color ? color : "#49536E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
