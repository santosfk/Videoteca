import React from "react";
import useAxios from "../../hooks/useAxios";
import { Videos } from "../../types/videos";
export default function FavoriteModal() {
  const { data } = useAxios("videos");
  return (
    <div className="bg-white absolute w-96 h-48 p-4 z-10 top-16 right-5 rounded-lg shadow-xl flex items-center flex-col justify-center">
      {data?.videos?.map((video: Videos) => {
        if (video.like.valueOf() === true) {
          return (
            <div className="flex inline-flex justify-center items-center m-2 w-full ">
              <div className=" w-2/4 flex items-center justify-center">
                <h1 className="text-lg text-center">{video.title}</h1>
              </div>
              <div className=" w-2/4 flex items-center">
                <a
                  href={video.link}
                  target="_blank"
                  className=" bg-slate-600 p-1 w-12 text-center text-white rounded-md"
                >
                  ver
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
