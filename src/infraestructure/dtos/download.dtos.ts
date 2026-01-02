import { z } from "zod";
import { Platforms } from "../../domain/enums";

// Esquemas
export const Schema_Download = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2048, "La url debe tener menos de 2048 caracteres."),
  title: z
    .string()
    .max(64, "El título debe tener menos de 64 caracteres.")
    .optional(),
  platform: z.enum(Platforms).default(Platforms.YOUTUBE),
});

// DTOS
export type DTO_Download = z.infer<typeof Schema_Download>;
// DTO de response
export interface RES_GetIframe {
  url: string;
}
