import { Isotipo } from "./isotipo";
import { useEffect, useState } from "react";

export default function LoadingAnimated({ isLoading }: { isLoading: boolean }) {
  const [display, setDisplay] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setDisplay(true);
    } else {
      const timer = setTimeout(() => setDisplay(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!display && !isLoading) return null;

  return (
    <div
      className={`absolute inset-0 grid place-items-center ${
        !isLoading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="absolute inset-0 bg-gray-950/96" />
      <Isotipo className="w-[68dvw] animate-pulse-glow mb-[12dvh] z-50" />
    </div>
  );
}
