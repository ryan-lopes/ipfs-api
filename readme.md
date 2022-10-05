import { create } from 'ipfs-http-client';

async function main() {
  const node = create();
  console.log("Starting API");

  const file = {
    path: "wall-e.jpg",
    content: "HImage"
  };

  const cid = await post(node, file);
  await get(node, cid);
}

async function post(node, file) {

  const fileAdded = await node.add(file);
  const { cid } = fileAdded;

  console.log("Added file:", fileAdded.path, fileAdded.cid);

  return cid;
}

async function get(node, cid) {
  const decoder = new TextDecoder()
  let text = ''

  for await (const chunk of node.cat(cid)) {
    text += decoder.decode(chunk, { stream: true });
  }

  console.log("Added file contents:", text);
}

main();