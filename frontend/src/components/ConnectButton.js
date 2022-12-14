import { ConnectKitButton } from "connectkit";
import { shortenAddress } from "../utils/utils";

export default function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <div onClick={show} className="btn btn-primary self-center">
            {isConnected
              ? ensName
                ? ensName
                : shortenAddress(address)
              : "Connect Wallet"}
          </div>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
