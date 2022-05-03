import React, { useState } from "react";
import { mutate } from "swr";
import api from "../../services/api";
import useAxios from "../../hooks/useAxios";
import { Videos } from "../VideoArea/VideoArea";
type Props = {
  setOpenModal: Function;
  videoTitle: string;
  videoLink: string;
  id: string;
};
export default function EditModal({
  setOpenModal,
  videoTitle,
  videoLink,
  id,
}: Props) {
  const [title, setTitle] = useState(videoTitle);
  const [link, setLink] = useState(videoLink);
  const { data, mutate } = useAxios("videos");
  const handleSubmit = () => {
    const video = {
      title,
      link,
    };
    api.put(`videos/${id}`, video);
    const updateVideos = {
      videos: data.videos?.map((video: Videos) => {
        if (video._id === id) {
          return { ...video, title, link };
        }
        return video;
      }),
    };
    mutate(updateVideos, false);
    setOpenModal(false);
  };
  return (
    <div className="w-96 h-96 bottom-6  flex flex-col items-center bg-teal-600 absolute rounded justify-around">
      <h2
        className="text-lg text-slate-100 cursor-pointer hover:translate-y-1 duration-200"
        onClick={() => setOpenModal(false)}
      >
        fechar
      </h2>
      <div className="flex flex-col">
        <label htmlFor="title">Titulo</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder:italic p-2 outline-cyan-700"
          type="text"
          name="title"
          placeholder="digite o titulo do video"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="link">Link</label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="placeholder:italic p-2 outline-cyan-700"
          type="text"
          name="link"
          placeholder="insira o link do video"
        />
      </div>
      <button
        className="bg-cyan-500 text-slate-50 w-52 p-3 rounded-md hover:bg-cyan-700 duration-500"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}
