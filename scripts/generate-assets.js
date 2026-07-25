const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const appDir = path.join(__dirname, "..", "app");

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
    }
  }
  return ~c >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

/** Minimal valid ICO with embedded PNG (Vista+) */
function pngToIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // ICO
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0); // width 0 = 256
  entry.writeUInt8(0, 1); // height 0 = 256
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

async function createIconSvg(size) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06080f"/>
      <stop offset="100%" stop-color="#0d1f17"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <rect x="24" y="24" width="464" height="464" rx="80" fill="none" stroke="#10b981" stroke-width="8" opacity="0.35"/>
  <text x="256" y="310" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="240" font-weight="700" fill="#10b981">M</text>
</svg>`;
}

async function createOgSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06080f"/>
      <stop offset="50%" stop-color="#0a1620"/>
      <stop offset="100%" stop-color="#0d1f17"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <!-- subtle grid -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    ${Array.from({ length: 24 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="630"/>`).join("")}
    ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${i * 50}" x2="1200" y2="${i * 50}"/>`).join("")}
  </g>
  <rect x="48" y="48" width="1104" height="534" rx="24" fill="none" stroke="#10b981" stroke-opacity="0.25" stroke-width="2"/>
  <text x="100" y="220" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="500" fill="#10b981" letter-spacing="6">PORTFOLIO</text>
  <text x="100" y="320" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#e8edf5">Mishan Savaliya</text>
  <text x="100" y="390" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="400" fill="#94a3b8">Full Stack Developer</text>
  <text x="100" y="460" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#64748b">MERN Stack Specialist · 5+ Years Experience</text>
  <circle cx="1020" cy="315" r="90" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="2"/>
  <text x="1020" y="340" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="#10b981">MS</text>
</svg>`;
}

async function main() {
  const iconSvg = Buffer.from(await createIconSvg(512));
  const icon512 = await sharp(iconSvg).png().toBuffer();
  const apple = await sharp(iconSvg).resize(180, 180).png().toBuffer();
  const faviconPng = await sharp(iconSvg).resize(32, 32).png().toBuffer();
  const ico = pngToIco(await sharp(iconSvg).resize(256, 256).png().toBuffer());

  const ogSvg = Buffer.from(await createOgSvg());
  const og = await sharp(ogSvg).png().toBuffer();

  fs.writeFileSync(path.join(appDir, "icon.png"), icon512);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);
  fs.writeFileSync(path.join(appDir, "opengraph-image.png"), og);

  // also keep a 32px reference unused by next but useful
  fs.writeFileSync(path.join(appDir, "icon-32.png"), faviconPng);

  console.log("Generated: favicon.ico, icon.png, apple-icon.png, opengraph-image.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
