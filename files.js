import fs from 'fs'

export const addFile = async (node, fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await node.add({ path: fileName, content: file, });
  const { cid } = fileAdded;

  return { fileName, cid };
}


export const getFile = async (node, cid) => {

  let array = []
  const outputPath = "./output.tar"

  for await (const chunk of node.get(cid)) {
    array.push(Buffer.from(chunk));
    //console.log(array);
  }
  const buf = Buffer.concat(array);
  console.log(buf.toString());

  const file = fs.writeFileSync(
    outputPath,
    buf,
  );

  return file;
}