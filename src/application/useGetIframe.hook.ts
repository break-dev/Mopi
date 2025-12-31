import {
  Schema_GetAudioIframe,
  Schema_GetVideoIframe,
} from "../infraestructure/dtos/get_iframe.dtos";
import { GetIframe } from "../infraestructure/requests/get_iframe";
import type { ErrorResponse } from "../infraestructure/response";
import { useState } from "react";

export const useGetIframe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse>(null);
  const [url, setUrl] = useState<string>("");

  const get_audio_iframe = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;
    let result: string = "";

    const result_validation = Schema_GetAudioIframe.safeParse({ url });
    if (result_validation.success) {
      try {
        const api_response = await GetIframe.get_audio_iframe(
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
    setUrl(result);
  };

  const get_video_iframe = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;
    let result: string = "";

    const result_validation = Schema_GetVideoIframe.safeParse({ url });
    if (result_validation.success) {
      try {
        const api_response = await GetIframe.get_video_iframe(
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
    setUrl(result);
  };

  return { get_audio_iframe, get_video_iframe, setUrl, isLoading, error, url };
};
