import { ConnectKitButton } from "connectkit";
import { shortenAddress } from "../utils/shortenAddress";
export default function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <div onClick={show} className="btn btn-primary self-center btn-xs">
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
