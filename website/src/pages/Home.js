import React, { useState } from "react";
import { ethers } from "ethers";
import { Settings } from "assets/icons";
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import { Spinner } from "assets/icons";
import ConnectButton from "components/ConnectButton";
import { Lock } from "contracts/Lock";
export default function Home() {
  const { address, isDisconnected } = useAccount();
  const { data } = useBalance({
    addressOrName: address,
  });
  const [amount, setAmount] = useState(0);

  const { config } = usePrepareContractWrite({
    addressOrName: Lock.address,
    contractInterface: Lock.abi,
    functionName: "createLock",
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount.toString()),
    },
  });
  const { isLoading, isSuccess, write, status } = useContractWrite(config);

  const CreateLockButton = () => (
    <button
      disabled={!write | isDisconnected}
      onClick={() => write()}
      className="btn btn-primary"
    >
      Create lock
    </button>
  );

  const loadingButton = () => (
    <button className="btn btn-circle">Loading</button>
  );
  console.log(status);

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
        {isLoading ? loadingButton() : <CreateLockButton />}
        {isDisconnected ? <ConnectButton /> : <CreateLockButton />}
      </div>
    </div>
  );
}
