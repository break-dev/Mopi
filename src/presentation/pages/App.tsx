import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Isotipo } from "../components/isotipo";
import { Recharge } from "../components/recharge";
import { SwitchMode } from "../components/switch-mode";
import type { ErrorResponse } from "../../infraestructure/response";
import { useGetIframe } from "../../application/useGetIframe.hook";
import { SwitchPlatform } from "../components/switch-platform";
import { Platforms } from "../../domain/enums";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse>(null);
  const [mode, setMode] = useState<"audio" | "video">("audio");
  const [url, setUrl] = useState<string>("");
  const [platform, setPlatform] = useState<string>(Platforms.SOUNDCLOUD);
  const [iframe, setIframe] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const { get_iframe } = useGetIframe({
    url,
    platform,
    setIsLoading,
    setError,
    setIframe,
  });

  const handleIframe = () => {
    get_iframe();
  };

  return (
    <main
      className={`flex flex-col max-sm:gap-14 sm:gap-16
      w-full max-w-[600px] px-10 ${iframe ? "pb-[4dvh]" : "pb-[16dvh]"}`}
    >
      {/* Isotipo */}
      <Isotipo
        className={`w-[50dvw] max-w-3xs self-center ${
          iframe ? "w-[28dvw]" : "w-[50dvw]"
        }`}
      />

      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="flex flex-row items-center mb-2 justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Isotipo className="w-9" />
            <h1 className="font-bold text-lg select-text">Mopi Sound</h1>
          </div>
          <SwitchMode mode={mode} setMode={setMode} />
          <SwitchPlatform mode={mode} setMode={setMode} />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-7">
          {/* Link */}
          <div className="flex flex-col gap-1">
            <label htmlFor="link">Link</label>
            <div className="flex flex-row items-end gap-2">
              <Input
                id="link"
                autoFocus={true}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/..."
                type="url"
              />
              <Button
                title="Cargar"
                className="w-min p-2.5"
                onClick={handleIframe}
              >
                <Recharge strokeWidth={2} className="size-6" />
              </Button>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="title">
              Título <span className="text-gray-400">(opc.)</span>
            </label>
            <Input id="title" placeholder="Lipps Inc. - Funkytown" />
          </div>

          {/* Iframe */}
          {/* https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/src/lib/LiteYouTubeEmbed.css */}
          <iframe
            className={`w-full h-[24dvh] rounded-md ${iframe ? "" : "hidden"}`}
            src={iframe}
          />

          {/* Botón para descargar */}
          <Button title="Descargar" className="p-2 mt-2.5 font-semibold">
            Descargar
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
