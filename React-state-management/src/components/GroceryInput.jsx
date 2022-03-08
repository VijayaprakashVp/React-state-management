import { useState } from "react";
import { GroceryList } from "./GroceryList";

export function GroceryInput() {
  const [list, setList] = useState("");
  const [grocery_list, setGrocery_list] = useState([]);

  const handleList = () => {
    setGrocery_list([...grocery_list, list]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter list"
        onChange={(e) => {
          setList(e.target.value);
        }}
      />
      <button onClick={handleList}>Save</button>
      <div>
        {grocery_list.map((e) => {
          return (
            <div>
              <p>
                {e} <button>Delete</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
