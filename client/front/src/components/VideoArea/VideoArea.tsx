import React, { useEffect, useState } from "react";

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
      const url = "http://localhost:3001/videos";
      const response = await fetch(url);
      const data = await response.json();
      setVideosData(data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center h-4/5 w-full items-center ">
      {videosData.map((item) => {
        return (
          <div
            key={item._id}
            className="bg-red-400 w-64 h-64 m-3 rounded-md flex justify-center p-5 "
          >
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
