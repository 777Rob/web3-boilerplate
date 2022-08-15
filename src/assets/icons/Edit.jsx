import React from "react";

export default function Edit({ fill, size, color, props }) {
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
        id="pen-Filled-2"
        data-name="pen-Filled"
        fill={color ? color : "#41416e"}
        d="M11.911,6.33l5.76,5.76L9.771,20a2.521,2.521,0,0,1-1.35.7l-4.74.79a.97.97,0,0,1-.17.01,1.017,1.017,0,0,1-.71-.3,1.028,1.028,0,0,1-.29-.88l.79-4.74A2.521,2.521,0,0,1,4,14.23ZM20.3,3.7a4.056,4.056,0,0,0-5.76,0l-1.21,1.21,5.76,5.76L20.3,9.46a4.056,4.056,0,0,0,0-5.76Z"
      />
    </svg>
  );
}
