import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const json = JSON.parse(
  fs.readFileSync(path.join(root, "docs/figma-project-pages-summary.json"), "utf8"),
);

const extraAssets = [
  {
    dest: "public/images/shared/hamburger.svg",
    url: "https://www.figma.com/api/mcp/asset/cf37d93c-9734-4d49-a7a1-049fd44a51b5.svg",
  },
  {
    dest: "public/images/shared/menu-divider.svg",
    url: "https://www.figma.com/api/mcp/asset/af8a3e38-e2e7-49db-a958-03c8978e1047.svg",
  },
  {
    dest: "public/images/about/portrait.png",
    url: "https://www.figma.com/api/mcp/asset/a4c258b9-3de1-4349-aaf8-5fd57d74df1f.png",
  },
  {
    dest: "public/images/home/coral-atlas.png",
    url: "https://www.figma.com/api/mcp/asset/e5cf417b-62c1-4c8b-9a73-10233e6dec49.png",
  },
  {
    dest: "public/images/home/who-am-i.png",
    url: "https://www.figma.com/api/mcp/asset/46374c3c-9f72-4479-95bc-00fcd1acc11d.png",
  },
  {
    dest: "public/images/home/hitchcock.png",
    url: "https://www.figma.com/api/mcp/asset/1a0349c5-f103-400c-9f15-b2a161757269.png",
  },
  {
    dest: "public/images/home/triz.png",
    url: "https://www.figma.com/api/mcp/asset/3d6514cb-66ec-465b-8bfa-a40a7ab42975.png",
  },
  {
    dest: "public/images/home/oxide.png",
    url: "https://www.figma.com/api/mcp/asset/2eb8a187-f194-4af0-950f-12d8a0753ed7.png",
  },
  {
    dest: "public/images/home/four-directions.png",
    url: "https://www.figma.com/api/mcp/asset/0eef6775-f2fd-4a12-a6ad-39fc8bad4a81.png",
  },
  {
    dest: "public/images/home/this-is-me.png",
    url: "https://www.figma.com/api/mcp/asset/aecc6c93-1f3f-41fb-83b4-50f4e434b9ef.png",
  },
  {
    dest: "public/images/home/crumples.png",
    url: "https://www.figma.com/api/mcp/asset/e82817c7-2671-4e78-be7e-31f24e536175.png",
  },
  {
    dest: "public/images/home/trails.png",
    url: "https://www.figma.com/api/mcp/asset/6ef70ee5-c603-4d72-8136-0ed3608a10df.png",
  },
  {
    dest: "public/images/home/bear-umbrella-loser.png",
    url: "https://www.figma.com/api/mcp/asset/28e2c653-3b61-4d20-81f1-7e77677f0441.png",
  },
  {
    dest: "public/images/home/dudu-tassa.png",
    url: "https://www.figma.com/api/mcp/asset/ec8c6c7f-222c-4e6d-a937-a282d7559bc4.png",
  },
  {
    dest: "public/images/home/gus-van-sant.png",
    url: "https://www.figma.com/api/mcp/asset/fd0a6915-dfc8-4468-beaf-890555a06ae7.png",
  },
  {
    dest: "public/images/projects/oxide/video.png",
    url: "https://www.figma.com/api/mcp/asset/885adc6f-8f10-44ed-973d-fa72b2ae7f03",
  },
  {
    dest: "public/images/projects/oxide/cube.png",
    url: "https://www.figma.com/api/mcp/asset/2139aa9e-458b-456c-a9bd-d70e163dc594",
  },
  {
    dest: "public/images/projects/oxide/cone.png",
    url: "https://www.figma.com/api/mcp/asset/d667e0ab-740a-41b2-ae6c-ba0445bdae82",
  },
  {
    dest: "public/images/projects/oxide/sphere.png",
    url: "https://www.figma.com/api/mcp/asset/6f95f6b7-5ec9-4de6-9577-650c9dc149a0",
  },
  {
    dest: "public/images/projects/triz/triz18.png",
    url: "https://www.figma.com/api/mcp/asset/f0b2450a-b1a8-4c61-88f9-eb8a8575d363.png",
  },
  {
    dest: "public/images/projects/triz/triz17.png",
    url: "https://www.figma.com/api/mcp/asset/5f6ab32d-af8f-4799-a5e7-688141f9216d.png",
  },
  {
    dest: "public/images/projects/triz/triz19.png",
    url: "https://www.figma.com/api/mcp/asset/fb087dc2-1816-4b36-a043-f72e2330e698.png",
  },
  {
    dest: "public/images/projects/triz/triz20.png",
    url: "https://www.figma.com/api/mcp/asset/2bd9f5a4-acb6-42c2-8c72-03814725d475.png",
  },
  {
    dest: "public/images/projects/triz/triz1.png",
    url: "https://www.figma.com/api/mcp/asset/8c6383fc-27ed-4156-a1de-aa6628d53f5f.png",
  },
  {
    dest: "public/images/projects/triz/triz11.png",
    url: "https://www.figma.com/api/mcp/asset/513b1447-8404-4222-9953-8a0f8a025765.png",
  },
  {
    dest: "public/images/projects/triz/triz6.png",
    url: "https://www.figma.com/api/mcp/asset/ea7db3d2-2bc9-4cdb-ac2b-ae862fbc6c30.png",
  },
  {
    dest: "public/images/projects/triz/img8432.png",
    url: "https://www.figma.com/api/mcp/asset/6625b0f9-0d3f-4e31-bcc5-141509e3a2cb.png",
  },
  {
    dest: "public/images/projects/triz/triz4.png",
    url: "https://www.figma.com/api/mcp/asset/63922cb0-4053-4d99-aa4a-6a6b6bbfa424.png",
  },
  {
    dest: "public/images/projects/triz/triz9.png",
    url: "https://www.figma.com/api/mcp/asset/ba990b3a-72e4-416c-bb90-59cd4ee6cace.png",
  },
  {
    dest: "public/images/projects/triz/triz14.png",
    url: "https://www.figma.com/api/mcp/asset/a65822e2-2076-471d-a70f-977ef1d1f71e.png",
  },
  {
    dest: "public/images/projects/triz/triz16.png",
    url: "https://www.figma.com/api/mcp/asset/d4c850fc-9ba0-4426-849a-389bc2ad615e.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals10.png",
    url: "https://www.figma.com/api/mcp/asset/744a9fe6-7344-4614-a9ec-26a3f6e5fb3a.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals2.png",
    url: "https://www.figma.com/api/mcp/asset/85d539cc-435e-44af-88c4-019065181343.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals1.png",
    url: "https://www.figma.com/api/mcp/asset/d80b8741-173c-4bee-a47b-6352a71087d3.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals8.png",
    url: "https://www.figma.com/api/mcp/asset/4a141d73-3ebc-44be-ad1b-a5175fc616e8.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals5.png",
    url: "https://www.figma.com/api/mcp/asset/c5ab5a8a-d6cc-4803-9500-4fe65fcdffe4.png",
  },
  {
    dest: "public/images/projects/coral-atlas/corals3.png",
    url: "https://www.figma.com/api/mcp/asset/2f0d6ad4-bbbf-42f9-81dd-3a636f63ea3b.png",
  },
];

for (const page of json.pages) {
  page.images?.forEach((image, index) => {
    if (!image.url) return;
    const ext = image.url.includes(".svg") ? "svg" : "png";
    extraAssets.push({
      dest: `public/images/projects/${page.slug}/${index + 1}-${image.name.replace(/[^\w.-]+/g, "-").slice(0, 40)}.${ext}`,
      url: image.url,
    });
  });
}

async function downloadAsset({ dest, url }) {
  const fullPath = path.join(root, dest);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  if (fs.existsSync(fullPath)) return;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed ${url}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(fullPath, buffer);
  console.log("saved", dest);
}

for (const asset of extraAssets) {
  await downloadAsset(asset);
}

console.log(`Downloaded ${extraAssets.length} assets.`);
