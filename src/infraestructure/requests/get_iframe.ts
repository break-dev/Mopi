import type { DTO_GetIframe } from "../dtos/get_iframe.dtos";
import { api } from "../api";
import type { IRespuesta } from "../response";
import type { RES_GetIframe } from "../dtos/download.dtos";

export class GetIframe {
  public static get_iframe = async (
    dto: DTO_GetIframe
  ): Promise<IRespuesta<RES_GetIframe>> => {
    const { data } = await api.post(`/get_iframe`, dto);
    return data;
  };
}
