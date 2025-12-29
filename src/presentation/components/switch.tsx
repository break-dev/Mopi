import music from "../assets/music.svg";
import video from "../assets/video.svg";

interface SwitchProps {
  mode: "audio" | "video";
  setMode: (mode: "audio" | "video") => void;
}

export const Switch = ({ mode, setMode }: SwitchProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setMode(mode == "audio" ? "video" : "audio");
      }}
      className="flex flex-row gap-0.5 rounded-full bg-white p-1"
    >
      {/* Music */}
      <div
        title="Descargar audio"
        className={`rounded-full p-1 ${mode == "audio" ? "bg-green-300" : ""}`}
      >
        <img src={music} alt="Descargar audio" className="size-5" />
      </div>
      {/* Video */}
      <div
        title="Descargar video"
        className={`rounded-full p-1 ${mode == "video" ? "bg-green-300" : ""}`}
      >
        <img src={video} alt="Descargar video" className="size-5" />
      </div>
    </div>
  );
};
