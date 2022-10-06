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

main();