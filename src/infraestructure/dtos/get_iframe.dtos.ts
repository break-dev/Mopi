import { z } from "zod";
import { AudioPlatforms, VideoPlatforms } from "../../domain/enums";

// Esquemas
export const Schema_GetAudioIframe = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2048, "La url debe tener menos de 2048 caracteres."),
  platform: z.enum(AudioPlatforms).default(AudioPlatforms.YOUTUBE),
});

export const Schema_GetVideoIframe = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2048, "La url debe tener menos de 2048 caracteres."),
  platform: z.enum(VideoPlatforms).default(VideoPlatforms.YOUTUBE),
});

// DTOS
export type DTO_GetAudioIframe = z.infer<typeof Schema_GetAudioIframe>;
export type DTO_GetVideoIframe = z.infer<typeof Schema_GetVideoIframe>;