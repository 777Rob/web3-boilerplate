import React, { useState } from "react";
import { Settings } from "assets/icons";
import { useAccount, useBalance } from "wagmi";
import { Spinner } from "assets/icons";
import ConnectButton from "components/ConnectButton";

export default function Home() {
  const { address, isDisconnected } = useAccount();
  const { data } = useBalance({
    addressOrName: address,
  });
  const [amount, setAmount] = useState(0);

  return (
    <div className="card mt-12 w-96 shadow-xl bg-base-200 mx-auto">
      <div className="card-body">
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-xs">Create Lock</p>
          <Settings className="cursor-pointer" size="18" />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Deposit Amount</span>
          </label>
          <div className="input-group relative flex items-center">
            <input
              max={data && parseInt(data.formatted)}
              type="number"
              value={amount}
              onChange={(e) => {
                let newValue = parseInt(e.target.value);
                let maxValue = parseInt((data && data.formatted) || "10000");
                newValue <= maxValue
                  ? setAmount(newValue)
                  : setAmount(maxValue);
              }}
              placeholder={(data && data.formatted) || "0"}
              className="input input-bordered flex flex-1"
            />
            <button
              onClick={() => setAmount(parseInt(data.formatted))}
              className="btn right-16 rounded-xl btn-xs absolute btn-primary"
            >
              MAX
            </button>
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
