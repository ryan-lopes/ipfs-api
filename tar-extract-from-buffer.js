// Codigo adaptado de https://gist.github.com/gera2ld
// Gist: tar-extract-from-buffer.js
import { Readable } from 'stream';
import tar from 'tar';
import fs from 'fs';


export function string2stream(stringOrBuffer) {
  const reader = new Readable();
  reader.push(stringOrBuffer);
  reader.push(null);
  return reader;
}

function readEntry(entry) {
  return new Promise((resolve, reject) => {
    const buffers = [];
    entry.on('data', c => {
      buffers.push(c);
    });
    entry.on('end', err => {
      if (err) reject(err);
      else resolve([entry.path, Buffer.concat(buffers)]);
    });
  });
}

async function readEntries(promises) {
  const entries = await Promise.all(promises);
  return entries.reduce((res, [path, buffer]) => {
    res[path] = buffer;
    return res;
  }, {});
}

export default function extractFromTarBuffer(buffer) {
  return new Promise((resolve, reject) => {
    const promises = [];
    string2stream(buffer)
      .pipe(tar.t({
        onentry(entry) {
          promises.push(readEntry(entry));
        },
      }))
      .on('end', err => {
        if (err) reject(err);
        else resolve(readEntries(promises));
      });
  });
}
