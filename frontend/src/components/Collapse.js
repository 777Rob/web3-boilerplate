import React from "react";

function Collapse({ children, title }) {
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
    >
      <div class="collapse-title text-xl font-medium">{title}</div>
      <div class="collapse-content">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;
