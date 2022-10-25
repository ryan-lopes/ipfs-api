import fs from 'fs'
import extractTar from './tar-extract-from-buffer.js'

export const addFile = async (node, fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const { cid } = await node.add({ path: fileName, content: file });
  return { fileName, cid };
}

export const getFile = async (node, cid, dest) => {
  const tmpPath = "./tmp.tar.gz"
}

export const getRawFile = async (node, cid, compress, destFile) => {
  let array = []

  for await (const chunk of node.get(cid, { archive: true, compress })) {
    array.push(chunk);
  }

  const contentFile = Buffer.concat(array);
  return contentFile;
}

export default async (node, srcFile, destFile) => {
  const { fileName, cid } = await addFile(node, srcFile.name, srcFile.path);
  const tmpFile = {
    path: "./output.tar.gz"
  }

  console.log(`Name: ${fileName} \n CID: ${cid}`);

  const buffer = await getRawFile(node, cid, true, tmpFile);
  
  const object = await extractTar(buffer);
  
  fs.writeFileSync(
    "./image.jpg",
    object[cid],
  );

}