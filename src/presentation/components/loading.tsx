import { Isotipo } from "./isotipo";

export const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) {
    return;
  }

  return (
    <div
      className={`absolute inset-0 grid place-items-center ${
        isLoading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="absolute inset-0 bg-neutral-900 opacity-95" />
      <Isotipo
        className=""
      />
    </div>
  );
};
