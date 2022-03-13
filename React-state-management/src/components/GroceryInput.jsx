import { useState } from "react";
import { nanoid } from "nanoid";
import { GroceryList } from "./GroceryList";

export const GroceryInput = () => {
  const [item, setItem] = useState("");
  const [grocery_list, setGrocery_list] = useState([]);
  console.log("grocery_list:", grocery_list);

  const handleList = () => {
    const t = {
      id: nanoid(),
      title: item,
      status: false,
    };
    setGrocery_list([...grocery_list, t]);
    setItem("");
  };

  const handleToggle = (e) => {
    let [name, value] = e.target;
    console.log("e:", e);
    // setGrocery_list(...GroceryList, )
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter list"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={handleList}>Save</button>
      <GroceryList value={grocery_list} Toggle={handleToggle} />
    </div>
  );
};
