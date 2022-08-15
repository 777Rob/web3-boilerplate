import React from "react";

export default function Button({ danger, warning, children, ...props }) {
  let buttonStyle =
    "py-1 px-4 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75";

  danger &&
    (buttonStyle =
      "py-1 px-4 bg-error-500 text-white font-semibold rounded-lg shadow-md hover:bg-error-400 focus:outline-none focus:ring-2 focus:ring-warning-400 focus:ring-opacity-75");

  warning &&
    (buttonStyle =
      "py-1 px-4 bg-warning-500 text-white font-semibold rounded-lg shadow-md hover:bg-warning-400 focus:outline-none focus:ring-2 focus:ring-warning-400 ");

  return (
    <button className={buttonStyle} {...props}>
      <span>{children}</span>
    </button>
  );
}
