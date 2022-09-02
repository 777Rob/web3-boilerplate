import { SnackbarProvider } from "notistack";
import { Buffer } from "buffer";
import Navbar from "./components/Navbar";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { createClient, WagmiConfig, chain } from "wagmi";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import Locks from "pages/Locks";
import History from "pages/History";

if (!window.Buffer) window.Buffer = Buffer;
const client = createClient(
  getDefaultClient({
    autoConnect: true,
    alchemyId: process.env.REACT_APP_ALCHEMY_KEY,
    chains: [chain.polygonMumbai, chain.localhost, chain.hardhat],
  })
);
function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  // const API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY | "";

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <BrowserRouter>
          <SnackbarProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/locks" element={<Locks />} />
              <Route path="/History" element={<History />} />
            </Routes>
          </SnackbarProvider>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
