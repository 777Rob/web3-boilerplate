import { Buffer } from "buffer";
import Navbar from "./components/Navbar";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { createClient, WagmiConfig, chain } from "wagmi";
import "./App.css";
import "./index.css";
if (!window.Buffer) window.Buffer = Buffer;
const client = createClient(
  getDefaultClient({
    autoConnect: true,
    alchemyId: process.env.REACT_APP_ALCHEMY_KEY,
    chains: [chain.polygonMumbai, chain.localhost],
  })
);

function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  // const API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY | "";
  console.log(process.env.REACT_APP_ALCHEMY_KEY);
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
