import {
  Schema_Download,
  type RES_Download,
} from "../../infraestructure/dtos/download.dtos";
import { Download } from "../../infraestructure/requests/download";
import type { ErrorResponse } from "../../infraestructure/response";
import { platformAnalyzer } from "../utils/platformAnalyzer";

interface UseDownloadProps {
  url: string;
  title: string;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: ErrorResponse) => void;
}
export const useDownload = ({
  url,
  title,
  setIsLoading,
  setError,
}: UseDownloadProps) => {
  const handleBlobDownload = (data: RES_Download) => {
    const urlBlob = window.URL.createObjectURL(data.blob);
    const link = document.createElement("a");
    link.href = urlBlob;
    link.setAttribute("download", data.filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(urlBlob);
  };

  const download_audio = async () => {
    const platform = platformAnalyzer(url);
    if (!platform) return setError("Plataforma no soportada");

    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;

    const schema = Schema_Download.safeParse({
      url,
      title: title.trim() || undefined,
      platform,
    });

    if (schema.success) {
      try {
        const response = await Download.download_audio(schema.data);
        if (response.success && response.data) {
          handleBlobDownload(response.data);
        } else {
          error = response.error || "Error desconocido al descargar";
        }
      } catch {
        error = "Ups! Hubo un error...";
      }
    } else {
      error = schema.error.issues.map((i) => i.message);
    }

    setError(error);
    setIsLoading(false);
  };

  const download_video = async () => {
    const platform = platformAnalyzer(url);
    if (!platform) {
      return setError("Plataforma no soportada");
    }
    else if (platform == "soundcloud") {
      return setError("Plataforma no soportada para video");
    }

    setIsLoading(true);
    setError(null);
    let error: ErrorResponse = null;

    const schema = Schema_Download.safeParse({
      url,
      title: title.trim() || undefined,
      platform,
    });

    if (schema.success) {
      try {
        const response = await Download.download_video(schema.data);
        if (response.success && response.data) {
          handleBlobDownload(response.data);
        } else {
          error = response.error || "Error desconocido al descargar";
        }
      } catch {
        error = "Ups! Hubo un error...";
      }
    } else {
      error = schema.error.issues.map((i) => i.message);
    }

    setError(error);
    setIsLoading(false);
  };

  return {
    download_audio,
    download_video,
  };
};
