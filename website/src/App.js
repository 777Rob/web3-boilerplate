import { Buffer } from "buffer";
import Navbar from "./components/Navbar";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { createClient, WagmiConfig, chain } from "wagmi";
import "./App.css";
import Tabs from "components/Tabs";
import { useState } from "react";
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
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locks" element={<Locks />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
