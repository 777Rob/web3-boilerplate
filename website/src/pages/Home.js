import React from "react";
import { Settings } from "assets/icons";
import { useAccount } from "wagmi";
import { Spinner } from "assets/icons";
import ConnectButton from "components/ConnectButton";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <div className="card mt-12 w-96 shadow-xl bg-base-200 mx-auto">
      <div className="card-body">
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-xs">Create Lock</p>
          <Settings className="cursor-pointer" size="18" />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Enter Initial Deposit Amount</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              placeholder="0.01"
              className="input input-bordered flex flex-1"
            />
            <span className="input input-bordered">ETH</span>
          </div>
        </div>
        <button className="btn btn-primary">
          {isDisconnected ? <ConnectButton /> : "Create lock"}
        </button>
      </div>
    </div>
  );
}
