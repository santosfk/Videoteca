import React, { useState } from "react";
import AddModal from "../AddModal/AddModal";
export default function AddButton() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full flex justify-center mb-44">
      {openModal && <AddModal setOpenModal={setOpenModal} />}
      <button
        onClick={() => setOpenModal(true)}
        className="bg-slate-800 text-white p-4 rounded-md w-48 hover:bg-slate-900 "
      >
        Adicionar videos
      </button>
    </div>
  );
}
