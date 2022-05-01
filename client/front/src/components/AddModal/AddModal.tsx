import React, { useState } from "react";
import api from "../../services/api";
type Props = {
  setOpenModal: Function;
};
export default function AddModal({ setOpenModal }: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = () => {
    const video = {
      title,
      link,
    };
    api.post("videos", video);
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
        Adicionar
      </button>
    </div>
  );
}