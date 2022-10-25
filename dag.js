import fs from 'fs'

export const addDag = async (node, fileName, filePath) => {
  //const file = fs.readFileSync(filePath);
  const obj = {
    type: ".jpg",
    fileName
  }
  const cid = await node.dag.put(obj, { storeCodec: 'dag-cbor', hashAlg: 'sha2-512' })

  return { fileName, cid };
}


export const getDag = async (node, cid) => {

  let array = []
  const outputPath = "./output.tar"

  const result = await ipfs.dag.get(cid)
  console.log(result);
  return;
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

export const main = async (node) => {
  const { name, cid } = await addDag(node, srcFile.name, srcFile.path);
  console.log(`Name: ${name} \n CID: ${cid}`);
  //const value = await getDag(node, cid);
  console.log(value);
}