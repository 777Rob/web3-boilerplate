import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Settings } from "assets/icons";
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
} from "wagmi";
import { Search } from "assets/icons";
import { useNavigate } from "react-router-dom";
import { Spinner } from "assets/icons";
import ConnectButton from "components/ConnectButton";
import { LockContract } from "contracts/Lock";
import LoadingButton from "components/LoadingButton";
import { useSnackbar } from "notistack";
import { shortenTransactionHash } from "utils/utils";

function CreateLockButton({ config }) {
  let { isLoading, isSuccess, write, data, isError, error } =
    useContractWrite(config);
  let { address, isDisconnected } = useAccount();
  let { enqueueSnackbar } = useSnackbar();
  // let {} = useSnackbar();
  let navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      const action = (snackbarId) => (
        <a
          className="btn btn-outline btn-info btn-sm"
          href={`https://mumbai.polygonscan.com/tx/${data.hash}`}
        >
          <div
            class="tooltip hover:tooltip-open tooltip-info"
            data-tip="Open transaction in block explorer"
          >
            <Search size="24" />
          </div>
        </a>
      );

      enqueueSnackbar(
        <div className="text-xs w-24">
          Lock created <br /> Tx :{shortenTransactionHash(data.hash)}
        </div>,
        {
          variant: "success",
          action,
        }
      );
    }
    if (isError) {
      enqueueSnackbar("error \n" + error.message, {
        variant: "error",
      });
    }
  }, [isSuccess, enqueueSnackbar, isError]);

  return isDisconnected ? (
    <ConnectButton className="btn btn-primary" />
  ) : (
    <button
      disabled={!write | isDisconnected}
      onClick={() => write()}
      className="btn btn-primary"
    >
      Create lock
    </button>
  );
}
export default function Home() {
  let { address, isDisconnected } = useAccount();
  let { data } = useBalance({
    addressOrName: address,
  });
  let [amount, setAmount] = useState(0);

  let { config } = usePrepareContractWrite({
    ...LockContract,
    onError: (e) => {
      console.log(e);
    },
    functionName: "createLock",
    onSettled: (tx) => {
      console.log(tx);
    },
    onSuccess: (tx) => {
      console.log(tx.hash);
    },

    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount.toString()),
    },
  });

  // let { isLoading, isSuccess, write, data } = useContractWrite(config);

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
        <CreateLockButton config={config} />
        {/* {isLoading ? <LoadingButton /> : <TestButton />} */}
      </div>
    </div>
  );
}
