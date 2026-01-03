import youtube from "../assets/youtube.svg";
import soundcloud from "../assets/soundcloud.png";

interface SwitchPlatformProps {
  platform: "youtube" | "soundcloud";
  setPlatform: (platform: "youtube" | "soundcloud") => void;
}

export const SwitchPlatform = ({
  platform,
  setPlatform,
}: SwitchPlatformProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setPlatform(platform == "youtube" ? "soundcloud" : "youtube");
      }}
      title={`Descargar ${platform == "youtube" ? "música" : "vídeos"}`}
      className="relative flex w-fit rounded-full bg-white p-1.5 
      gap-1.5 focus-visible:outline-emerald-300 cursor-pointer"
    >
      {/* Fondo deslizante */}
      <div
        className={`
          absolute self-center size-7 scale-[115%] rounded-full
          transition-transform duration-300 ease-out
          ${
            platform == "soundcloud"
              ? "bg-orange-400 translate-x-8"
              : "bg-red-400 translate-x-0"
          }
        `}
      />

      {/* youtube */}
      <div className="relative z-10 flex items-center justify-center rounded-full p-1">
        <img
          src={youtube}
          alt="Descargar audio"
          className={`size-5 transition-all duration-100 ease-out opacity-60 ${
            platform == "youtube" && "opacity-100"
          }`}
        />
      </div>

      {/* soundcloud */}
      <div className="relative z-10 flex items-center justify-center rounded-full p-1">
        <img
          src={soundcloud}
          alt="Descargar video"
          className={`size-5 transition-all duration-100 ease-out opacity-60 ${
            platform == "soundcloud" && "opacity-100"
          }`}
        />
      </div>
    </button>
  );
};
