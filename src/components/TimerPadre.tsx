import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [mili, setMili] = useState(1000);

  return (
    <div>
      <span>Milisegundos {mili} </span>
      <br />
      <button className="btn" onClick={() => setMili(1000)}>
        1000
      </button>
      <button className="btn" onClick={() => setMili(2000)}>
        2000
      </button>
      <Timer mili={mili} />
    </div>
  );
};
