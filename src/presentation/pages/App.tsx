import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Isotipo } from "../components/isotipo";
import { Recharge } from "../components/recharge";
import { Switch } from "../components/switch";

function App() {
  const [mode, setMode] = useState<"audio" | "video">("audio");

  return (
    <main
      className="flex flex-col max-sm:gap-14 sm:gap-16
      w-full max-w-[600px] px-10"
    >
      {/* Isotipo */}
      <Isotipo className="w-[50dvw] max-w-3xs self-center" />

      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="flex flex-row items-center mb-2 justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Isotipo className="w-9" />
            <h1 className="font-semibold text-lg select-text">Mopi Sound</h1>
          </div>
          <Switch mode={mode} setMode={setMode} />
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
                placeholder="https://www.youtube.com/..."
                type="url"
              />
              <Button
                title="Cargar"
                className="w-min p-2.5 focus:bg-green-400 active:bg-green-500"
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
