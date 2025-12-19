import { Input } from "../components/input";
import { Isotipo } from "../components/isotipo";
import { Recharge } from "../components/recharge";

function App() {
  return (
    <main
      className="flex flex-col max-sm:gap-14 sm:gap-16
      w-full max-w-[600px] px-10"
    >
      {/* <Isotipo className="max-sm:w-44 self-center" /> */}
      <Isotipo className="w-[50dvw] max-w-3xs self-center" />

      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center mb-1">
          <Isotipo className="w-7" />
          <h1 className="font-semibold text-base">Mopi Sound</h1>
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
              <button
                className="w-min h-full bg-white text-(--dark-primary) p-2.5"
                title="Cargar"
              >
                <Recharge strokeWidth={2.1} className="size-6" />
              </button>
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
          <button title="Descargar" className="bg-white text-(--dark-primary) 
          font-semibold p-2 mt-2.5">
            Descargar
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
