import React from "react";
import ThemeChange from "./ThemeChange";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import ConnectButton from "./ConnectButton";

export default function Navbar() {
  return (
    <div class="navbar h-10 py-2 min-h-8 bg-base-300 rounded-box">
      <div class="flex-1 px-2 lg:flex-none">
        <a class="text-lg font-bold">App Name</a>
      </div>
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <ConnectButton />
          <ThemeChange />
        </div>
      </div>
    </div>
  );
}
