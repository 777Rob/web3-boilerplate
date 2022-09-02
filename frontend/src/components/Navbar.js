import React from "react";
import ConnectButton from "./ConnectButton";
import ThemeChange from "./ThemeChange";

export default function Navbar() {
  return (
    <div className="navbar  bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">App Name</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch space-x-1">
          <ConnectButton />
          <ThemeChange />
        </div>
      </div>
    </div>
  );
}
