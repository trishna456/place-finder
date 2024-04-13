import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL set");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("cleaning up interval");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
