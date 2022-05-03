import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import { Videos } from "../../types/videos";
import useAxios from "../../hooks/useAxios";

export default function VideoArea() {
  const { data } = useAxios("videos");

  return (
    <div className="flex flex-col justify-center items-center md:flex-row   ">
      {data?.videos?.map((item: Videos) => {
        return (
          <VideoItem
            key={item._id}
            title={item.title}
            link={item.link}
            like={item.like}
            id={item._id}
          />
        );
      })}
    </div>
  );
}
