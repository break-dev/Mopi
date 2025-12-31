import { z } from "zod";
import {
  AudioPlatforms,
  AudioQuality,
  VideoPlatforms,
  VideoQuality,
} from "../../domain/enums";

// Esquemas
export const Schema_AudioDownload = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2048, "La url debe tener menos de 2048 caracteres."),
  title: z
    .string()
    .max(64, "El título debe tener menos de 64 caracteres.")
    .optional(),
  platform: z.enum(AudioPlatforms).default(AudioPlatforms.YOUTUBE),
  quality: z.enum(AudioQuality).default(AudioQuality.MEDIUM),
});

export const Schema_VideoDownload = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2048, "La url debe tener menos de 2048 caracteres."),
  title: z
    .string()
    .max(64, "El título debe tener menos de 64 caracteres.")
    .optional(),
  platform: z.enum(VideoPlatforms).default(VideoPlatforms.YOUTUBE),
  quality: z.enum(VideoQuality).default(VideoQuality.MEDIUM),
});

// DTOS
export type DTO_AudioDownload = z.infer<typeof Schema_AudioDownload>;
export type DTO_VideoDownload = z.infer<typeof Schema_VideoDownload>;
// DTO de response
export interface RES_GetIframe {
  url: string;
}
