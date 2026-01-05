import { z } from "zod";
import { Platforms } from "../../domain/enums";

// Esquemas
export const Schema_GetIframe = z.object({
  url: z
    .url("Ingresa una url válida.")
    .max(2083, "La url debe tener menos de 2083 caracteres."),
  platform: z.enum(Platforms).default(Platforms.YOUTUBE),
});

// DTOS
export type DTO_GetIframe = z.infer<typeof Schema_GetIframe>;
// DTOS de respuesta
export interface RES_GetIframe {
  url: string;
}
