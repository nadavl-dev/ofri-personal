import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/images/hover");

const HOVER_ASSETS = [
  { slug: "coral-atlas", url: "https://www.figma.com/api/mcp/asset/e5cf417b-62c1-4c8b-9a73-10233e6dec49.png" },
  { slug: "oxide", url: "https://www.figma.com/api/mcp/asset/5be8c965-465d-4047-a5f0-1450a4b9b85d.png" },
  { slug: "who-am-i", url: "https://www.figma.com/api/mcp/asset/46374c3c-9f72-4479-95bc-00fcd1acc11d.png" },
  { slug: "triz", url: "https://www.figma.com/api/mcp/asset/3d6514cb-66ec-465b-8bfa-a40a7ab42975.png" },
  { slug: "hitchcock", url: "https://www.figma.com/api/mcp/asset/1a0349c5-f103-400c-9f15-b2a161757269.png" },
  { slug: "crumples", url: "https://www.figma.com/api/mcp/asset/e82817c7-2671-4e78-be7e-31f24e536175.png" },
  { slug: "four-directions", url: "https://www.figma.com/api/mcp/asset/0eef6775-f2fd-4a12-a6ad-39fc8bad4a81.png" },
  { slug: "this-is-me", url: "https://www.figma.com/api/mcp/asset/aecc6c93-1f3f-41fb-83b4-50f4e434b9ef.png" },
  { slug: "trails", url: "https://www.figma.com/api/mcp/asset/6ef70ee5-c603-4d72-8136-0ed3608a10df.png" },
  { slug: "bear-umbrella-loser", url: "https://www.figma.com/api/mcp/asset/28e2c653-3b61-4d20-81f1-7e77677f0441.png" },
  { slug: "dudu-tassa", url: "https://www.figma.com/api/mcp/asset/ec8c6c7f-222c-4e6d-a937-a282d7559bc4.png" },
  { slug: "gus-van-sant", url: "https://www.figma.com/api/mcp/asset/bb65f85b-2b17-453b-b155-9e14aec58df7.png" },
];

fs.mkdirSync(outDir, { recursive: true });

for (const { slug, url } of HOVER_ASSETS) {
  const dest = path.join(outDir, `${slug}.png`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${slug}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Saved ${slug}.png (${(buffer.length / 1024).toFixed(0)} KB)`);
}
