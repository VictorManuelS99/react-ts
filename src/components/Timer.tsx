import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  mili: number;
};

export const Timer = ({ mili }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    console.log("useeffect");
    ref.current = setInterval(() => setSegundos((s) => s + 1), mili);
  }, [mili]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
