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
            <div className="flex inline-flex gap-4 justify-center items-center">
              <h1>{video.title}</h1>
              <a href={video.link} target="_blank" className="flex-1">
                ver
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}
