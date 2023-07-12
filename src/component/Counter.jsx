import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [counter, setCounter] = useState(0);

  const hendelIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const hendelDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div>
      Counter {counter}
      <div>
        <Button text="+" onClick={hendelIncrement}></Button>
        <Button text="-" onClick={hendelDecrement}></Button>
      </div>
    </div>
  );
}

export default Counter;
