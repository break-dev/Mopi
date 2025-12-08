import { api } from "../api";
import type { IRespuesta } from "../response";
import type {
  DTO_AudioDownload,
  DTO_VideoDownload,
} from "../dtos/download.dtos";

export class Download {
  public static get_audio_iframe = async (
    dto: DTO_AudioDownload
  ): Promise<IRespuesta<null>> => {
    const { data } = await api.post(`/get_audio_iframe`, dto);
    return data;
  };

  public static get_video_iframe = async (
    dto: DTO_VideoDownload
  ): Promise<IRespuesta<null>> => {
    const { data } = await api.post(`/get_video_iframe`, dto);
    return data;
  };
}
