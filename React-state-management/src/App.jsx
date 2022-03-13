import { useState } from "react";
import "./App.css";
import { Stopwatch } from "./components/Stopwatch";
// import { Grocery } from "./components/Grocery";
// import { GroceryInput } from "./components/GroceryInput";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Stopwatch /> : ""}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {/* <Stopwatch /> */}
      {/* <Grocery /> */}
    </div>
  );
}

export default App;
