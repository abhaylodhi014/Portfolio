import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Auto-copy uploaded user photo to public directory
const srcPhoto = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\1fa63849-1def-43db-a3b5-0c5fcd3928e9\\media__1787249252920.jpg`;
const destPhotoPng = path.join(process.cwd(), "public", "passport_image.png");
const destPhotoJpg = path.join(process.cwd(), "public", "passport_image.jpg");

try {
  if (fs.existsSync(srcPhoto)) {
    fs.copyFileSync(srcPhoto, destPhotoPng);
    fs.copyFileSync(srcPhoto, destPhotoJpg);
  }
} catch (e) {
  console.error("Photo copy info:", e);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
