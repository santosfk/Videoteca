const express = require("express");
const routes = express.Router();
const videoController = require("./controllers/videoController");
const videoMiddleware = require("./middlewares/videoMiddleware");
routes.get("/", (req, res) => {
  res.send("olá companheiro");
});
routes.get("/videos", videoController.index);
routes.post("/videos", videoController.store);
routes.put("/videos/:id", videoMiddleware.validadeID, videoController.update);
routes.delete(
  "/videos/:id",
  videoMiddleware.validadeID,
  videoController.delete
);
routes.patch(
  "/videos/:id",
  videoMiddleware.validadeID,
  videoController.updateLike
);
module.exports = routes;
