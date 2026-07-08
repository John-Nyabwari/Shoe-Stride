import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      current += Math.random() * 8 + 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 500);
        return;
      }
      setProgress(Math.floor(current));
      setTimeout(tick, 30 + Math.random() * 50);
    };
    tick();
  }, [onComplete]);

  return (
    <div className={`preloader${done ? " done" : ""}`}>
      <div className="preloader-logo">SHOESTRIDE</div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" id="preloaderFill" style={{ width: `${progress}%` }} />
      </div>
      <div className="preloader-percent" id="preloaderPercent">{progress}%</div>
    </div>
  );
}
