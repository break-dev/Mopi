import { api } from "../api";
import type { IRespuesta } from "../response";
import type { DTO_Download, RES_Download } from "../dtos/download.dtos";
import getFilename from "../../application/utils/getFilename";

export class Download {
  public static download_audio = async (
    dto: DTO_Download
  ): Promise<IRespuesta<RES_Download>> => {
    const response = await api.post(`/download_audio`, dto, {
      responseType: "blob",
    });

    const blob = response.data;
    const contentType = response.headers["content-type"];

    if (contentType && contentType.includes("application/json")) {
      const text = await blob.text();
      return JSON.parse(text) as IRespuesta<RES_Download>;
    }
    const contentDisposition = response.headers["content-disposition"];
    const filename = getFilename(contentDisposition) || dto.title || "mopi.mp3";

    return {
      success: true,
      data: {
        blob: blob,
        filename: filename,
      },
    };
  };

  public static download_video = async (
    dto: DTO_Download
  ): Promise<IRespuesta<null> | Blob> => {
    const { data } = await api.post(`/download_video`, dto);
    return data;
  };
}
