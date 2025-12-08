import type { AudioPlatforms, VideoPlatforms } from "../../domain/enums";

export interface DTO_GetAudioIframe {
  url: string;
  platform: AudioPlatforms;
}

export interface DTO_GetVideoIframe {
  url: string;
  platform: VideoPlatforms;
}
