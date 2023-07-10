"use client";
import Header from "./Header";
import dayjs from "dayjs";
import { useState, useRef, useEffect } from "react";
const defaultImg = `https://static.nnnnzs.cn/bing/${dayjs().format(
  "YYYYMMDD"
)}.png`;
export default function Banner({
  autoScroll = true,
  cover = defaultImg,
}: {
  autoScroll?: boolean;
  cover?: string;
}) {
  const bannerStyle = useRef({
    backgroundImage: `url(${cover})`,
  });

  const oneText = useRef<HitokotoData>({
    creator: "",
    from: "",
    hitokoto: "",
  });

  const anchorRef = useRef<HTMLDivElement>(null);

  const scrollIntoPost = () => {
    anchorRef.current &&
      anchorRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    fetch("https://v1.hitokoto.cn/")
      .then((res) => res.json())
      .then((res: HitokotoData) => {
        oneText.current = res;
      });
    if (autoScroll) {
      setTimeout(() => {
        scrollIntoPost();
      }, 1000);
    }
  });

  return (
    <>
      <Header></Header>
      <div
        className="banner relative h-screen bg-scroll md:bg-fixed  bg- bg-cover flex justify-center items-center"
        style={bannerStyle.current}
      >
        <div className="antialiased text-2xl WenYueQingLongTi text-white">
          <p className="mb-20">{oneText.current.hitokoto}</p>
          {oneText.current.from && (
            <p className="text-center">
              {oneText.current.from}-{oneText.current.creator}
            </p>
          )}
        </div>
        <div
          onClick={() => scrollIntoPost()}
          className="animate-bounce absolute left-0 right-0 bottom-1 text-center cursor-pointer"
        >
          <i className="iconfont icon-paper-plane text-4xl text-white w-4 h-4"></i>
        </div>
      </div>
      <div ref={anchorRef}></div>
    </>
  );
}
