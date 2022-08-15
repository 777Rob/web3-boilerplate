import logo from "./logo.svg";
import "./App.css";
import { Star } from "assets/icons";
import Input from "components/Input";
import { useState } from "react";
import Button from "components/Button";
import Modal from "components/Modal";
function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="flex justify-center">
      <Button warning onClick={() => setValue(!value)}>
        Test
      </Button>
      <Modal open={value} setOpen={setValue}>
        Test
      </Modal>
    </div>
  );
}

export default App;
