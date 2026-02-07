/**
 * Generates favicon and app icons from public/profile-pic.png (hero profile image).
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "public", "profile-pic.png");
const outDir = path.join(rootDir, "public");

const SIZES = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function main() {
  if (!fs.existsSync(sourcePath)) {
    console.error("Source image not found:", sourcePath);
    process.exit(1);
  }

  const image = sharp(sourcePath);

  for (const { name, size } of SIZES) {
    const outPath = path.join(outDir, name);
    await image
      .clone()
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log("Written:", name);
  }

  const png16 = await sharp(sourcePath).resize(16, 16).png().toBuffer();
  const png32 = await sharp(sourcePath).resize(32, 32).png().toBuffer();
  const icoBuffer = await toIco([png16, png32]);
  fs.writeFileSync(path.join(outDir, "favicon.ico"), icoBuffer);
  console.log("Written: favicon.ico");

  console.log("Done. Favicons generated from profile-pic.png.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
