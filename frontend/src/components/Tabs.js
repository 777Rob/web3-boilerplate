import React, { useState } from "react";

export default function Tabs({ tabs = ["tab1", "tab2", "tab3"] }) {
  const [active, setActive] = useState("tab1");

  return (
    <div class="tabs tabs-boxed">
      {tabs.map((tab) => (
        <a
          onClick={() => setActive(tab)}
          className={`${tab == active && "tab-active"} tab`}
        >
          {tab}
        </a>
      ))}
    </div>
  );
}
