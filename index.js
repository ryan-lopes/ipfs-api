import express from 'express'
import fileUpload from 'express-fileupload'
import router from './routes.js'
import bodyParser from 'body-parser'

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
router(app);


app.listen(3000, () => {
  console.log("Servidor inicializado");
});