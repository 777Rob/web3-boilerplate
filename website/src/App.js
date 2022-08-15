import Navbar from "components/Navbar";
import { getDefaultProvider } from "ethers";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  chain,
  configureChains,
} from "wagmi";
import "./App.css";
import "./index.css";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Buffer } from "buffer";

if (!window.Buffer) window.Buffer = Buffer;
const client = createClient(getDefaultClient({ autoConnect: true }));

function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  // const API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY | "";
  useEffect(() => {});
  // console.log(API_KEY);
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <div className="flex justify-center">
          <Navbar />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
