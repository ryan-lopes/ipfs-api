import { create } from 'ipfs-http-client'
import fs from 'fs'

// ipfs-core/ipfs-http-client

const ipfs = create('/ip4/127.0.0.1/tcp/5001')

const addFile = async (fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add({ path: fileName, content: file });
  const fileHash = fileAdded.cid;
  return fileHash;
}


export default {
  async create(req, res) {
    const file = req.files.file;
    const fileName = req.body.fileName;
    const filePath = 'files/' + fileName;

    file.mv(filePath, async (err) => {

      if (err) {
        console.log("An error ocurred");
        return res.sendStatus(500);
      }

      const fileHash = await addFile(fileName, filePath)

      fs.unlink(filePath, (err) => {

        if (err) {
          console.log(err);

          console.log("An error ocurred 2");
        }
      })
      console.log(fileHash);
      console.log(fileName);
      res.render("upload", { fileName, fileHash })

    })
  },
  async show(req, res) {
    res.render('index');
  }
}
