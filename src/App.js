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
function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [value, setValue] = useState(false);

  return (
    <div className="flex justify-center">
      <ThemeChange />
    </div>
  );
}

export default App;
