import { api } from "../api";
import type { AxiosResponse } from "axios";
import type { IRespuesta } from "../response";
import type { DTO_Download } from "../dtos/download.dtos";

export class Download {
  public static download_audio = async (
    dto: DTO_Download
  ): Promise<IRespuesta<null> | AxiosResponse<Blob>> => {
    const { data } = await api.post(`/download_audio`, dto);
    return data;
  };

  public static download_video = async (
    dto: DTO_Download
  ): Promise<IRespuesta<null> | AxiosResponse<Blob>> => {
    const { data } = await api.post(`/download_video`, dto);
    return data;
  };
}
