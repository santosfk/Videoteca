import React from "react";
import useAxios from "../../hooks/useAxios";
import { Videos } from "../../types/videos";
export default function FavoriteModal() {
  const { data } = useAxios("videos");
  return (
    <div className="bg-white absolute w-72 h-48 p-4 z-10 top-16 right-5 rounded-lg shadow-xl flex items-center flex-col">
      {data?.videos?.map((video: Videos) => {
        if (video.like.valueOf() === true) {
          return (
            <div className="flex inline-flex gap-3 items-center m-2">
              <h1 className="text-lg text-center  w-2/4">{video.title}</h1>
              <a
                href={video.link}
                target="_blank"
                className=" bg-slate-600 p-1 w-12 text-center text-white rounded-md"
              >
                ver
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}
