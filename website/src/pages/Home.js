import React from "react";
import { Close } from "assets/icons";
import { Settings, ArrowDown } from "assets/icons";
export default function Home() {
  return (
    <div
      className="card mt-12 w-96 shadow-xl bg-base-300
      mx-auto  self-center"
    >
      <div className="card-body ">
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-xs">Swap</p>
          <Settings className="cursor-pointer" size="18" />
        </div>
      </div>
    </div>
  );
}
