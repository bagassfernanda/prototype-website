import { readFileSync, writeFileSync } from 'node:fs';
import { deflateSync, inflateSync } from 'node:zlib';

const inputPath = 'public/brand/artavel-official-logo.png';
const outputPath = 'public/brand/artavel-official-logo-transparent.png';

const source = readFileSync(inputPath);
const signature = source.subarray(0, 8);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

if (!signature.equals(pngSignature)) {
  throw new Error('Input is not a PNG file.');
}

const chunks = [];
let offset = 8;

while (offset < source.length) {
  const length = source.readUInt32BE(offset);
  const type = source.subarray(offset + 4, offset + 8).toString('ascii');
  const data = source.subarray(offset + 8, offset + 8 + length);
  chunks.push({ type, data });
  offset += 12 + length;
}

const ihdr = chunks.find((chunk) => chunk.type === 'IHDR')?.data;
if (!ihdr) {
  throw new Error('PNG is missing IHDR.');
}

const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
const bitDepth = ihdr[8];
const colorType = ihdr[9];
const interlace = ihdr[12];

if (bitDepth !== 8 || colorType !== 2 || interlace !== 0) {
  throw new Error(`Unsupported PNG format. Expected 8-bit RGB non-interlaced, got bitDepth=${bitDepth}, colorType=${colorType}, interlace=${interlace}.`);
}

const compressed = Buffer.concat(chunks.filter((chunk) => chunk.type === 'IDAT').map((chunk) => chunk.data));
const inflated = inflateSync(compressed);
const bytesPerPixel = 3;
const stride = width * bytesPerPixel;
const rows = [];
let readOffset = 0;

const paeth = (a, b, c) => {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
};

for (let y = 0; y < height; y += 1) {
  const filter = inflated[readOffset];
  readOffset += 1;
  const row = Buffer.from(inflated.subarray(readOffset, readOffset + stride));
  readOffset += stride;
  const previous = rows[y - 1] || Buffer.alloc(stride);

  for (let x = 0; x < stride; x += 1) {
    const left = x >= bytesPerPixel ? row[x - bytesPerPixel] : 0;
    const up = previous[x];
    const upLeft = x >= bytesPerPixel ? previous[x - bytesPerPixel] : 0;
    let value = row[x];

    if (filter === 1) value = (value + left) & 255;
    if (filter === 2) value = (value + up) & 255;
    if (filter === 3) value = (value + Math.floor((left + up) / 2)) & 255;
    if (filter === 4) value = (value + paeth(left, up, upLeft)) & 255;

    row[x] = value;
  }

  rows.push(row);
}

const outputRows = [];
const outputStride = width * 4;

for (const row of rows) {
  const outputRow = Buffer.alloc(1 + outputStride);
  outputRow[0] = 0;

  for (let x = 0; x < width; x += 1) {
    const sourceIndex = x * 3;
    const targetIndex = 1 + x * 4;
    const r = row[sourceIndex];
    const g = row[sourceIndex + 1];
    const b = row[sourceIndex + 2];
    const nearWhite = r > 232 && g > 232 && b > 232 && Math.max(r, g, b) - Math.min(r, g, b) < 18;

    outputRow[targetIndex] = r;
    outputRow[targetIndex + 1] = g;
    outputRow[targetIndex + 2] = b;
    outputRow[targetIndex + 3] = nearWhite ? 0 : 255;
  }

  outputRows.push(outputRow);
}

const newIhdr = Buffer.from(ihdr);
newIhdr[9] = 6;

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const createChunk = (type, data) => {
  const typeBuffer = Buffer.from(type, 'ascii');
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  typeBuffer.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return chunk;
};

const output = Buffer.concat([
  pngSignature,
  createChunk('IHDR', newIhdr),
  createChunk('IDAT', deflateSync(Buffer.concat(outputRows), { level: 9 })),
  createChunk('IEND', Buffer.alloc(0))
]);

writeFileSync(outputPath, output);
console.log(`Wrote ${outputPath} (${width}x${height})`);
