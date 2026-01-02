import { Schema_GetIframe } from "../infraestructure/dtos/get_iframe.dtos";
import { GetIframe } from "../infraestructure/requests/get_iframe";
import type { ErrorResponse } from "../infraestructure/response";

interface UseGetIframeProps {
  url: string;
  platform: string;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: ErrorResponse) => void;
  setIframe: (iframe: string) => void;
}

export const useGetIframe = ({
  url,
  platform,
  setIsLoading,
  setError,
  setIframe,
}: UseGetIframeProps) => {
  const get_iframe = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;
    let result: string = "";

    const result_validation = Schema_GetIframe.safeParse({ url, platform });
    if (result_validation.success) {
      try {
        const api_response = await GetIframe.get_iframe(
          result_validation.data
        );
        if (api_response.success) {
          result = api_response.data?.url ?? "";
        } else {
          error = api_response.error;
        }
      } catch {
        error = "Ups! Hubo un error...";
      }
    } else {
      error = result_validation.error.issues.map((i) => i.message);
    }
    setError(error);
    setIsLoading(false);
    setIframe(result);
  };

  return { get_iframe };
};
