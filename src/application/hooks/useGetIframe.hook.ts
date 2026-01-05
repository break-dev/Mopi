import { Schema_GetIframe } from "../../infraestructure/dtos/get_iframe.dtos";
import { GetIframe } from "../../infraestructure/requests/get_iframe";
import type { ErrorResponse } from "../../infraestructure/response";
import { platformAnalyzer } from "../utils/platformAnalyzer";

interface UseGetIframeProps {
  url: string;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: ErrorResponse) => void;
  setIframe: (iframe: string) => void;
}

export const useGetIframe = ({
  url,
  setIsLoading,
  setError,
  setIframe,
}: UseGetIframeProps) => {
  const get_iframe = async (): Promise<void> => {
    const platform = platformAnalyzer(url);
    if (!platform) {
      setError("Plataforma no soportada");
      return;
    }

    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;
    let result: string = "";

    const schema = Schema_GetIframe.safeParse({ url, platform });
    if (schema.success) {
      try {
        const response = await GetIframe.get_iframe(schema.data);
        if (response.success) {
          result = response.data?.url ?? "";
          error = !result ? "Ups! Hubo un error..." : null;
        } else {
          error = response.error;
        }
      } catch {
        error = "Ups! Hubo un error...";
      }
    } else {
      error = schema.error.issues.map((i) => i.message);
    }
    setIframe(result);
    setError(error);
    setIsLoading(false);
  };

  return { get_iframe };
};
