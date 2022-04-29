const { response } = require("express");
const Video = require("../models/video");
const { v4: uuid } = require("uuid");
const res = require("express/lib/response");
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
      _id: uuid(),
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
  async update(request, response) {
    const { title, link } = request.body;
    if (!title && !link) {
      return response
        .status(400)
        .json({ error: "you must inform a new title or a new link" });
    }
    if (title) response.video.title = title;
    if (link) response.video.link = link;
    try {
      await response.video.save();
      return response.status(200).json({ message: "video is updated" });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
  async delete(request, response) {
    try {
      await response.video.remove();
      return response.status(200).json({ message: "videos has been removed" });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
  async updateLike(request, response) {
    response.video.like = !response.video.like;
    try {
      await response.video.save();
      return response
        .status(200)
        .json({ message: `${response.video.like ? "liked" : "desliked"}` });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
};
