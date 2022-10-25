import fs from 'fs'
import extractTar from './tar-extract-from-buffer.js'

export const addFile = async (node, fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const { cid } = await node.add({ path: fileName, content: file });
  return { fileName, cid };
}

export const getFileBuffer = async (node, cid, compress) => {
  let array = []

  for await (const chunk of node.get(cid, { archive: true, compress })) {
    array.push(chunk);
  }

  const compressedBuffer = Buffer.concat(array);
  const fileBuffer = await extractTar(compressedBuffer);

  return fileBuffer;
}

export default async (node, srcFile) => {
  // Testing functionalities
  const { fileName, cid } = await addFile(node, srcFile.name, srcFile.path);

  //console.log(`Name: ${fileName} \n CID: ${cid}`);

  const buffer = await getFileBuffer(node, cid, true);

  fs.writeFileSync(
    "./image.jpg",
    buffer[cid],
  );

}