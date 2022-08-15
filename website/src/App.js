import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Star } from "assets/icons";
import Input from "components/Input";
import { useState } from "react";
import Modal from "components/Modal";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import ThemeChange from "components/ThemeChange";
import Navbar from "components/Navbar";
import { Lock } from "contracts/Lock";
function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [value, setValue] = useState(false);
  console.log(Lock);
  return (
    <div className="flex justify-center">
      <Navbar />
    </div>
  );
}

export default App;
