const { validate } = require("uuid");
const Video = require("../models/video");

module.exports = {
  async validadeID(request, response, next) {
    const { id } = request.params;
    if (!validate(id)) {
      return response.status(400).json({ error: "invalid id" });
    }
    try {
      const video = await Video.findById(id);
      response.video = video;
      if (!video) {
        response.status(404).json({ error: "video is not found" });
      }
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
    next();
  },
};
