import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

const TypewriterText = ({ text, delay = 40, onComplete, className = "" }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay, onComplete]);

  return (
    <span className={`text-glow ${className}`}>
      {displayed}
      {!done && <span className="cursor-blink text-secondary">▌</span>}
    </span>
  );
};

export default TypewriterText;
