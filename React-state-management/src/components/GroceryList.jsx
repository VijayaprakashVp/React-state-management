import { nanoid } from "nanoid";
export const GroceryList = ({ value, Toggle }) => {
  // console.log(props);
  return value.map((e) => {
    return (
      <div>
        <p key={nanoid}>
          {e.title} - {e.status ? "true" : "false"}
        </p>
      </div>
    );
  });
};
