import logo from "./logo.svg";
import "./App.css";
import { Star } from "assets/icons";
import Input from "components/Input";

function App() {
  return (
    <div className="flex justify-center">
      <Input Icon={Star} placeholder="test" label="Star" />
    </div>
  );
}

export default App;
