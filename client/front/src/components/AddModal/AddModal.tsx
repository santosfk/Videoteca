import React, { useState } from "react";
import { mutate } from "swr";
import api from "../../services/api";
import useAxios from "../../hooks/useAxios";
import { Videos } from "../../types/videos";
type Props = {
  setOpenModal: Function;
};
type AddVideo = {
  title: string;
  link: string;
};
export default function AddModal({ setOpenModal }: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const { data, mutate } = useAxios("videos");
  const handleSubmit = () => {
    const video = {
      title,
      link,
    };
    api.post("videos", video);
    const updateVideo = {
      videos: [...data.videos, video],
    };
    mutate(updateVideo, false);
    setOpenModal(false);
  };
  return (
    <div className="w-96 h-96 bottom-10 z-10  flex flex-col items-center bg-slate-400 absolute rounded justify-around">
      <h2
        className="  text-3xl text-slate-100 cursor-pointer hover:translate-y-1 duration-200"
        onClick={() => setOpenModal(false)}
      >
        fechar
      </h2>

      <div className="flex flex-col">
        <label htmlFor="title">Titulo</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder:italic p-2 outline-slate-700"
          type="text"
          name="title"
          placeholder="digite o titulo do video"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="link">Link</label>
        <input
          onChange={(e) => setLink(e.target.value)}
          className="placeholder:italic p-2 outline-slate-700"
          type="text"
          name="link"
          placeholder="insira o link do video"
        />
      </div>
      <button
        className="bg-cyan-500 text-slate-50 w-52 p-3 rounded-md hover:bg-cyan-700 duration-500"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </div>
  );
}
