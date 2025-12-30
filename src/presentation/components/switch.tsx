import music from "../assets/music.svg";
import video from "../assets/video.svg";

interface SwitchProps {
  mode: "audio" | "video";
  setMode: (mode: "audio" | "video") => void;
}

export const Switch = ({ mode, setMode }: SwitchProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setMode(mode == "audio" ? "video" : "audio");
      }}
      title={`Descargar ${mode == "audio" ? "música" : "vídeos"}`}
      className="relative flex w-fit rounded-full bg-white p-1.5 gap-1.5"
    >
      {/* Fondo deslizante */}
      <div
        className={`
          absolute self-center size-7 scale-[115%] rounded-full bg-green-300
          transition-transform duration-300 ease-out
          ${mode == "video" ? "translate-x-8" : "translate-x-0"}
        `}
      />

      {/* Audio */}
      <div className="relative z-10 flex items-center justify-center rounded-full p-1">
        <img
          src={music}
          alt="Descargar audio"
          className={`size-5 transition-all duration-100 ease-out opacity-60 ${
            mode == "audio" && "opacity-100"
          }`}
        />
      </div>

      {/* Video */}
      <div className="relative z-10 flex items-center justify-center rounded-full p-1">
        <img
          src={video}
          alt="Descargar video"
          className={`size-5 transition-all duration-100 ease-out opacity-60 ${
            mode == "video" && "opacity-100"
          }`}
        />
      </div>
    </button>
  );
};
