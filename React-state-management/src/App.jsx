import { useState } from "react";
import "./App.css";
import { Grocery } from "./components/Grocery";
import { GroceryInput } from "./components/GroceryInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grocery />
    </div>
  );
}

export default App;
