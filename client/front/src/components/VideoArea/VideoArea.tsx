import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import { Videos } from "../../types/videos";
import useAxios from "../../hooks/useAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
export default function VideoArea() {
  const { data } = useAxios("videos");

  return (
    <div className="flex flex-col justify-center items-center md:flex-row   ">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {data?.videos?.map((item: Videos) => {
          return (
            <SwiperSlide>
              <VideoItem
                key={item._id}
                title={item.title}
                link={item.link}
                like={item.like}
                id={item._id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
