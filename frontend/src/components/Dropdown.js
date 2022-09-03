import React from "react";

function Dropdown({ title, children, className }) {
  return (
    <div class={`dropdown dropdown-end ${className && className}`}>
      <button tabIndex="0" class="rounded-md p-2 btn-ghost m-1">
        {title}
      </button>
      <ul
        tabIndex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
      >
        {React.Children.map(children, (child) => (
          <li>{React.cloneElement(child)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
