const express = require("express");
const routes = express.Router();
const videoController = require("./controllers/videoController");
routes.get("/", (req, res) => {
  res.send("olá companheiro");
});
routes.get("/videos", videoController.index);
routes.post("/videos", videoController.store);
module.exports = routes;
