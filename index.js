import * as IPFS from 'ipfs-http-client';
import fileTest from './files.js';

const srcFile = {
  path: "./files/sYQ4La0.jpg",
  name: "Wall"
};

const destFile = {
  path: "./files/",
  name: "output_Wall"
}

const text = {
  path: "wall-e.jpg",
  content: "HImage"
};
 
async function main() {
  const node = IPFS.create('/ip4/127.0.0.1/tcp/5001')
  //console.log("Starting API");
  fileTest(node, srcFile, destFile);
}

main();