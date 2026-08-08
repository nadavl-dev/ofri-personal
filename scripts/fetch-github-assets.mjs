import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const REPO = "nadavl-dev/ofri-personal";
const REF =
  process.env.VERCEL_GIT_COMMIT_REF ??
  process.env.GITHUB_REF_NAME ??
  "main";

const LFS_POINTER = "version https://git-lfs.github.com/spec/v1";

function isLfsPointer(filePath) {
  if (!fs.existsSync(filePath)) return true;
  const stat = fs.statSync(filePath);
  if (stat.size > 512) return false;
  return fs.readFileSync(filePath, "utf8").startsWith(LFS_POINTER);
}

function listImageFiles() {
  return execSync("git ls-files public/images", {
    cwd: root,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);
}

async function downloadFile(relativePath) {
  const dest = path.join(root, relativePath);
  const url = `https://media.githubusercontent.com/media/${REPO}/${REF}/${relativePath}`;

  fs.mkdirSync(path.dirname(dest), { recursive: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url} (${response.status})`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Fetched ${relativePath} (${(buffer.length / 1024 / 1024).toFixed(1)} MB)`);
}

async function main() {
  const files = listImageFiles();
  const onVercel = process.env.VERCEL === "1";
  const toFetch = files.filter((file) => onVercel || isLfsPointer(path.join(root, file)));

  if (toFetch.length === 0) {
    console.log("All image assets already present locally.");
    return;
  }

  console.log(
    `Downloading ${toFetch.length} assets from GitHub (${REPO}@${REF})...`,
  );

  for (const file of toFetch) {
    await downloadFile(file);
  }

  console.log("Asset download complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
