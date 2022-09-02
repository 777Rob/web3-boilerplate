import React, { useEffect } from "react";
import { useAccount, useContractWrite } from "wagmi";
import ConnectButton from "components/ConnectButton";
import { useSnackbar } from "notistack";

export function CreateLockButton({ config }) {
  let { isLoading, isSuccess, write, data, isError, error } =
    useContractWrite(config);
  let { address, isDisconnected } = useAccount();
  let { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar(
        <div className="text">
          Lock was created successfully. Transaction hash: <br />
          {data.hash}
        </div>,
        { variant: "success" }
      );
    }
    if (isError) {
      enqueueSnackbar(
        <div>
          Error <br />
          {error.message}
        </div>,
        {
          variant: "error",
        }
      );
    }
  }, [isSuccess, enqueueSnackbar, isError]);

  return isDisconnected ? (
    <ConnectButton className="btn btn-primary" />
  ) : (
    <button
      disabled={!write | isDisconnected}
      onClick={() => write()}
      className={`btn btn-primary ${isLoading && "loading"}`}
    >
      Create lock
    </button>
  );
}
