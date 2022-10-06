
const addFile = async (node, fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await node.add({ path: fileName, content: file });
  const { cid } = fileAdded;

  return { fileName, cid };
}

const getFile = async (node, cid) => {
  return await node.get(cid);
}