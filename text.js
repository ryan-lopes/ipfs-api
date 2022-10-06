// Module Text
const addText = async (node, file) => {

  const fileAdded = await node.add(file);
  const { cid } = fileAdded;

  console.log("Added file:", fileAdded.path, fileAdded.cid);

  return cid;
}
