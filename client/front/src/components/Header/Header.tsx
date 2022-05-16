import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillHeart as Heart } from "react-icons/ai";
import FavoriteModal from "../FavoritesModal/FavoriteModal";
export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full px-11 py-5 bg-slate-800 inline-flex justify-between items-center ">
      {openModal && <FavoriteModal />}
      <h1 className="text-left text-2xl text-white">videoteca</h1>
      <div className="flex gap-9">
        <Heart
          className="text-3xl text-slate-100 cursor-pointer"
          onClick={() => setOpenModal(true)}
        />
        <a href="https://github.com/santosfk/Videoteca">
          <BsGithub className="text-3xl text-slate-100" />
        </a>
      </div>
    </div>
  );
}
