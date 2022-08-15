import logo from "./logo.svg";
import "./App.css";
import { Star } from "assets/icons";
import Input from "components/Input";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="flex justify-center">
      <Input
        Icon={Star}
        // value={value}
        // setValue={setValue}
        placeholder="test"
        label="Star"
      />
    </div>
  );
}

export default App;
