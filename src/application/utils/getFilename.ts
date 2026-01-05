export default function getFilename(contentDisposition: string): string {
  console.log("contentDisposition:\n", contentDisposition);
  if (!contentDisposition) return "";

  let filename: string = "";

  // Busca filename*=
  const filenameStarMatch = /filename\*=\s*([^;]+)/i.exec(contentDisposition);
  if (filenameStarMatch?.[1]) {
    try {
      const value = filenameStarMatch[1].trim();
      const parts = value.split("'");
      if (parts.length === 3) {
        filename = decodeURIComponent(parts[2]);
      } else {
        filename = decodeURIComponent(value.replace(/^utf-8''/i, ""));
      }
    } catch (e) {
      console.warn("[getFilename] Error decodificando filename*", e);
    }
  }

  if (!filename) {
    const simpleMatch = /filename=\s*["']?([^"';]+)["']?/i.exec(
      contentDisposition
    );
    if (simpleMatch?.[1]) {
      filename = simpleMatch[1].trim();
    }
  }

  return filename;
}
