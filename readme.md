import { create } from 'ipfs-http-client';

const filePath = "./files/wall-e.jpg";

const text = {
  path: "wall-e.jpg",
  content: "HImage"
};



async function main() {
  const node = create('/ip4/127.0.0.1/tcp/5001')
  console.log("Starting API");

  const cid = await addText(node, file);
  await get(node, cid);
}

const addFile = async (fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add({ path: fileName, content: file });
  const fileHash = fileAdded.cid;
  return fileHash;
}

const addText = async (node, file) => {

  const fileAdded = await node.add(file);
  const { cid } = fileAdded;

  console.log("Added file:", fileAdded.path, fileAdded.cid);

  return cid;
}

async function getFile(node, cid) {
  const decoder = new TextDecoder()
  let text = ''

  for await (const chunk of node.cat(cid)) {
    text += decoder.decode(chunk, { stream: true });
  }

  console.log("Added file contents:", text);
}

main();