import type {
  DTO_GetAudioIframe,
  DTO_GetVideoIframe,
} from "../dtos/get_iframe.dtos";
import { api } from "../api";
import type { IRespuesta } from "../response";
import type { RES_GetIframe } from "../dtos/download.dtos";

export class GetIframe {
  public static get_audio_iframe = async (
    dto: DTO_GetAudioIframe
  ): Promise<IRespuesta<RES_GetIframe>> => {
    const { data } = await api.post(`/get_audio_iframe`, dto);
    return data;
  };

  public static get_video_iframe = async (
    dto: DTO_GetVideoIframe
  ): Promise<IRespuesta<RES_GetIframe>> => {
    const { data } = await api.post(`/get_video_iframe`, dto);
    return data;
  };
}
