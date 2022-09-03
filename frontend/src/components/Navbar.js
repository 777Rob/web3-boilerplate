import React from "react";
import ConnectButton from "./ConnectButton";
import ThemeChange from "./ThemeChange";

export default function Navbar() {
  return (
    <div className="navbar py-2 justify-between bg-base-300">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Acid Monkeys</a>
      </div>

      <div className="space-x-4">
        <a className="text-xl font-semibold" href="#top">
          Home
        </a>
        <a className="text-xl font-semibold" href="#mint">
          Mint
        </a>
        <a className="text-xl font-semibold" href="#top">
          Team
        </a>
        <a className="text-xl font-semibold" href="#top">
          FAQ
        </a>
      </div>

      <div className="flex items-stretch space-x-1">
        <ConnectButton />
        <ThemeChange />
      </div>
    </div>
  );
}
