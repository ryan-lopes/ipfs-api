import * as IPFS from 'ipfs-http-client';
import fileTest from './files.js';

const srcFile = {
  path: "./files/sYQ4La0.jpg",
  name: "Wall"
};

async function main() {
  const node = IPFS.create('/ip4/127.0.0.1/tcp/5001')
  //console.log("Starting API");
  fileTest(node, srcFile);
}

main();