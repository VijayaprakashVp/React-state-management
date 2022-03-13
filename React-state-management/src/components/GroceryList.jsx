export const GroceryList = ({ value, Toggle }) => {
  // console.log(props);
  return value.map((e) => {
    return (
      <div>
        <p>
          {e.title} - {e.status ? "true" : "false"}
          <button onClick={() => Toggle(e)}>Toggle</button>
        </p>
      </div>
    );
  });
};
