// import { AuthService } from "../../../infraestructure/rest/auth/auth.service";
// import { AppStore } from "../../store/app.store";
// import { useGetChats } from "../chats/useGetChats";
// import { useGetMensajes } from "../mensajes/useGetMensajes";
// import { LoginSchema } from "../../../infraestructure/rest/auth/auth.dtos";
// import type { ErrorResponse } from "../../response";
// import { Paginas } from "../../../domain/enums";
// import {
//   IChatGrupalResponse,
//   IChatPrivadoResponse,
// } from "../../../domain/responses/chats.responses";

import type { ErrorResponse } from "../infraestructure/response";

export const useGetIframe = () => {

  const get_iframe = async (
    url: string,
    setIsLoading: (v: boolean) => void,
    setError: (e: ErrorResponse) => void
  ) => {
    setError(null);
    setIsLoading(true);

    const result = LoginSchema.safeParse({ username, password });
    if (!result.success) {
      setError(result.error.issues.map((i) => i.message));
      setIsLoading(false);
      return;
    }
  };

  return { iniciarSesion };
};
