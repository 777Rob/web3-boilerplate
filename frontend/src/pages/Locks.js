import React from "react";
import { Close } from "assets/icons";
import { Settings, ArrowDown } from "assets/icons";
import { LockContract } from "contracts";
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
} from "wagmi";
import { ethers } from "ethers";

export default function Locks() {
  const { address } = useAccount();

  const { data } = useContractReads({
    contracts: [
      {
        ...LockContract,
        functionName: "unlockTime",
      },
      {
        ...LockContract,
        functionName: "owner",
      },
      {
        ...LockContract,
        functionName: "lastId",
      },
      {
        ...LockContract,
        functionName: "addressLocks",
        args: [address],
      },
    ],
  });

  return (
    <div
      className="card mt-12 w-96 shadow-xl bg-base-300
      mx-auto  self-center"
    >
      <div
        onClick={() => data && console.log(ethers.utils.formatEther(data[2]))}
        className="card-body "
      >
        <div className="flex text-sm justify-between items-center">
          <p className="font-semibold text-xs">Swap</p>
          <Settings className="cursor-pointer" size="18" />
        </div>
      </div>
    </div>
  );
}
