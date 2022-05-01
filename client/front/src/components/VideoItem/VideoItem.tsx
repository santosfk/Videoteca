import React, { useState } from "react";
import { AiOutlineAppstoreAdd as AddIcon } from "react-icons/ai";
import { BsPencilSquare as PencilIcon } from "react-icons/bs";
import { MdOutlineDeleteOutline as DeleteIcon } from "react-icons/md";
import { AiFillHeart as HeartICon } from "react-icons/ai";
import EditModal from "../EditModal/EditModal";
import api from "../../services/api";
type Props = {
  title: string;
  link: string;
  like: Boolean;
  id: string;
};
export default function VideoItem({ title, link, like, id }: Props) {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleLike = (id: string) => {
    api.patch(`videos/${id}`);
  };
  const handleDelete = (id: string) => {
    api.delete(`videos/${id}`);
  };
  return (
    <div className="m-10 w-64 bg-gray-800 h-72 p-6 rounded-2xl ">
      {openEditModal && (
        <EditModal
          setOpenModal={setOpenEditModal}
          videoLink={link}
          videoTitle={title}
          id={id}
        />
      )}
      <h1 className="text-center mb-7 text-slate-100">{title}</h1>
      <button className=" w-full flex items-center justify-center mb-5 ">
        <a
          href={link}
          className="bg-slate-500 w-56 p-1 rounded-md  text-slate-100   "
        >
          Veja o video
        </a>
      </button>

      <button
        onClick={() => handleLike(id)}
        className="w-full mb-16 flex items-center justify-center "
      >
        <HeartICon
          className={
            like
              ? "text-red-600 text-4xl animate-bounce duration-75"
              : "text-slate-200 text-4xl animate-bounce  duration-75"
          }
        />
      </button>
      <div className=" w-full inline-flex items-center justify-around">
        <button
          onClick={() => setOpenEditModal(true)}
          className="text-2xl text-slate-200"
        >
          <PencilIcon />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="text-2xl text-slate-200"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
