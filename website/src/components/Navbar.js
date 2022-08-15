import React from "react";
import ThemeChange from "./ThemeChange";
export default function Navbar() {
  return (
    <div class="navbar bg-base-300 rounded-box">
      <div class="flex-1 px-2 lg:flex-none">
        <a class="text-lg font-bold">App</a>
      </div>
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <ThemeChange />
        </div>
      </div>
    </div>
  );
}
