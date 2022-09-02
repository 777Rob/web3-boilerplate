import React, { useState } from "react";
import { ethers } from "ethers";
import { Settings } from "assets/icons";
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractReads,
} from "wagmi";
import { LockContract } from "contracts/Lock";
import { CreateLockButton } from "components/CreateLockButton";

export default function Home() {
  let { address } = useAccount();
  let { data } = useBalance({
    addressOrName: address,
  });
  let [amount, setAmount] = useState(0);

  let { config } = usePrepareContractWrite({
    ...LockContract,
    functionName: "createLock",
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount.toString()),
    },
  });

  return (
    <div className="card mt-12 w-1/4 shadow-xl bg-base-200 mx-auto">
      <div className="card-body">
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-lg">Create Lock</p>
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
        <CreateLockButton config={config} />
        {/* {isLoading ? <LoadingButton /> : <TestButton />} */}
      </div>
    </div>
  );
}
