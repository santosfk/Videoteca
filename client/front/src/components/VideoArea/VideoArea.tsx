import React, { useEffect, useState } from "react";
import VideoItem from "../VideoItem/VideoItem";
import api from "../../services/api";
type Videos = {
  title: string;
  _id: string;
  link: string;
  like: boolean;
};
export default function VideoArea() {
  const [videosData, setVideosData] = useState<Videos[]>([]);
  useEffect(() => {
    GetData();
  });
  const GetData = async () => {
    try {
      const response = await api.get("videos");
      const data = response.data.videos;
      setVideosData(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center h-4/5 w-full items-center ">
      {videosData.map((item) => {
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
