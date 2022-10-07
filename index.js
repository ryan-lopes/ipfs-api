import { create } from 'ipfs-http-client';
import { addFile, getFile } from './files.js'
import { addDag, getDag } from './dag.js'

const filePath = "./files/wall-e.jpg";
const fileName = "walle";

const text = {
  path: "wall-e.jpg",
  content: "HImage"
};

async function main() {
  const node = create('/ip4/127.0.0.1/tcp/5001')
  //console.log("Starting API");
  dagTest(node);
}

async function dagTest(node) {
  const { fileName: name, cid } = await addDag(node, fileName, filePath);
  console.log(`Name: ${name} \n CID: ${cid}`);
  //const value = await getDag(node, cid);
  console.log(value);
}
async function fileTest(node) {
  const { fileName: name, cid } = await addFile(node, fileName, filePath);
  //console.log(`Name: ${name} \n CID: ${cid}`);
  //const value = await getFile(node, cid, filePath);
  console.log(value);
}
main();