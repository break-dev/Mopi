import type {
  AudioPlatforms,
  AudioQuality,
  VideoPlatforms,
  VideoQuality,
} from "../../domain/enums";

// DTOS para requests

export interface DTO_AudioDownload {
  url: string;
  title?: string;
  platform: AudioPlatforms;
  quality: AudioQuality;
}

export interface DTO_VideoDownload {
  url: string;
  title?: string;
  platform: VideoPlatforms;
  quality: VideoQuality;
}

// DTOS para reponses

export interface RES_GetIframe {
  url: string;
}