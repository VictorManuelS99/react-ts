import { useState } from "react";

export const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const incrementar = (num: number = 1): void => {
    setCounter(counter + num);
  };

  return (
    <div>
      <h3>Counter: useState</h3>
      <span>{counter}</span>
      <br />
      <button className="btn" onClick={() => incrementar(1)}>
        +1
      </button>
      <button className="btn" onClick={() => incrementar(2)}>
        +2
      </button>
      <button className="btn isRed" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};
