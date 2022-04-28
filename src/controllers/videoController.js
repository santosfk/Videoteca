const { response } = require("express");
const Video = require("../models/video");
const { randomUUID } = require("crypto");
module.exports = {
  async index(request, response) {
    try {
      const videos = await Video.find();
      return response.status(200).json({ videos });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },
  async store(request, response) {
    const { title, link } = request.body;
    if (!title || !link) {
      return response.status(400).json({ error: "missing title or link" });
    }
    const video = new Video({
      _id: randomUUID(),
      title,
      link,
      liked: false,
    });
    try {
      await video.save();
      return response.status(201).json({ message: "video added!" });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
};
