import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const id = setInterval(() => {
      // console.log("setInterval:", timer);
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0; // needs to set state ourself
        }
        return prev - 1;
      });
    }, 500);
    return () => {
      clearInterval(id);
      console.log("Unmounted");
    };
  }, []);
  return (
    <div>
      <h1> Timer : {timer} </h1>
    </div>
  );
};
