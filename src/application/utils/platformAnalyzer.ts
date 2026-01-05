import { Platforms } from "../../domain/enums";

// dominios conocidos de las plataformas
const DOMAIN_MAP: Record<string, Set<string>> = {
  [Platforms.YOUTUBE]: new Set([
    "youtube.com",
    "www.youtube.com",
    "m.youtube.com",
    "youtu.be",
    "youtube-nocookie.com",
    "music.youtube.com",
    "gaming.youtube.com",
    "kids.youtube.com",
    "ytimg.com",
    "yt.be",
  ]),
  [Platforms.SOUNDCLOUD]: new Set([
    "soundcloud.com",
    "www.soundcloud.com",
    "m.soundcloud.com",
    "snd.sc",
  ]),
};

// Analizar una URL y retorna la plataforma correspondiente basada en el hostname
export const platformAnalyzer = (url: string): string => {
  if (!url) return "";

  try {
    // aseguramos que el constructor URL no falle si falta el protocolo
    const urlWithProtocol = url.trim().match(/^https?:\/\//i)
      ? url.trim()
      : `https://${url.trim()}`;

    const { hostname } = new URL(urlWithProtocol);
    const host = hostname.toLowerCase();

    // iteramos sobre el mapa de dominios
    for (const [platform, domains] of Object.entries(DOMAIN_MAP)) {
      if (domains.has(host)) {
        return platform;
      }
    }

    return "";
  } catch (error) {
    console.error("Error en platformAnalyzer:\n", error);
    return "";
  }
};
