import express from 'express'
import controller from './ipfsController.js'
const route = (app) => {
  const router = express.Router();
  router.get("/", controller.show);
  router.post("/upload", controller.create);
  app.use('/', router);
}

export default route;