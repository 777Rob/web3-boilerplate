import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Star } from "assets/icons";
import Input from "components/Input";
import { useState } from "react";
import Modal from "components/Modal";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  // https://github.com/saadeghi/theme-change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [value, setValue] = useState(false);

  return (
    <div className="flex justify-center">
      <button class="btn">Button</button>
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-accent">Button</button>
      <button class="btn btn-ghost">Button</button>
      <button class="btn btn-link">Button</button>
      <Modal open={value} setOpen={setValue}>
        Test
      </Modal>
      <button data-set-theme="cupcake" data-act-class="ACTIVECLASS">
        emerald
      </button>
    </div>
  );
}

export default App;
