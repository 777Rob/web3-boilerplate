import React from "react";
import { Close } from "assets/icons";
import { Settings, ArrowDown } from "assets/icons";
export default function Home() {
  return (
    <div className="card mt-12 w-96 shadow-xl bg-base-200 mx-auto">
      <div className="card-body">
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-xs">Create Lock</p>
          <Settings className="cursor-pointer" size="18" />
        </div>
        <div>
          <label className="label ">
            <span className="label-text">Enter amount</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              placeholder="0.01"
              className="input input-bordered"
            />
            <span className="input input-bordered self-center">ETH</span>
          </div>
        </div>
        <button className="btn btn-primary">Create lock</button>
      </div>
    </div>
  );
}
