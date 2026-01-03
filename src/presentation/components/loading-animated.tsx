import { Isotipo } from "./isotipo";
import { useEffect, useState } from "react";

export default function LoadingAnimated({ isLoading }: { isLoading: boolean }) {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isLoading) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      if (shouldRender) {
        setIsFadingOut(true);
        timer = setTimeout(() => {
          setShouldRender(false);
        }, 300);
      }
    }
    return () => clearTimeout(timer);
  }, [isLoading, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`absolute w-dvw h-dvh grid place-items-center ${
        isFadingOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="absolute w-dvw h-dvh bg-gray-950 opacity-96" />
      <Isotipo className="w-[68dvw] animate-pulse-glow mb-[12dvh] z-50" />
    </div>
  );
}
