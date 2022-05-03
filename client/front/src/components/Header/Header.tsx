import React from "react";
import { BsGithub } from "react-icons/bs";
export default function Header() {
  return (
    <div className="w-full p-4 bg-slate-800 inline-flex justify-between  items-center ">
      <h1 className="text-left text-2xl text-white">videoteca</h1>
      <div>
        <a href="https://github.com/santosfk/Videoteca">
          <BsGithub className="text-3xl text-slate-100" />
        </a>
      </div>
    </div>
  );
}
