"use client";
import Image from "next/image";

import nextArrow from "@/public/assets/icon/nextArrow.png";
import prevArrow from "@/public/assets/icon/prevArrow.png";
import { useEffect, useRef, useState } from "react";

export interface ImageType {
  id: number;
  image: string;
  alt: string;
}
export default function Carousel(props: { images: ImageType[] }) {
  const [clickIdx, setClickIdx] = useState(0);
  const [idxWidth, setIdxWidth] = useState<number | undefined>(0);
  const imageContainer = useRef<null | HTMLDivElement>(null);

  const clickNext = () => {
    setClickIdx(clickIdx + 1);
    if (clickIdx >= props.images.length - 1) {
      setClickIdx(0);
    }
  };

  const clickPrev = () => {
    setClickIdx(clickIdx - 1);
    if (clickIdx <= 0) {
      setClickIdx(props.images.length - 1);
    }
  };

  useEffect(() => {
    let imgWidth = imageContainer.current?.offsetWidth;
    setIdxWidth(imgWidth && imgWidth * -clickIdx);
  }, [clickIdx]);

  return (
    <div className="my-20">
      <h3 className="text-xl font-semibold">PREVIEW</h3>
      <div
        className={`w-full h-auto flex relative rounded-lg overflow-hidden`}
        ref={imageContainer}
      >
        {props.images.map((img: ImageType) => (
          <Image
            key={img.id}
            src={img.image}
            alt={img.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto duration-300"
            priority={true}
            style={{ transform: `translateX(${idxWidth}px)` }}
          />
        ))}
      </div>
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          className="w-12 h-full flexCenter py-1 bg-medium-gray rounded-full hover:bg-main-blue"
          onClick={clickPrev}
        >
          <Image
            src={prevArrow}
            alt="이전 화살표"
            width={10}
            height={10}
            className="w-4 h-5"
          />
        </button>
        <button
          className="w-12 h-full flexCenter py-1 bg-medium-gray rounded-full hover:bg-main-blue"
          onClick={clickNext}
        >
          <Image
            src={nextArrow}
            alt="다음 화살표"
            width={10}
            height={10}
            className="w-4 h-5"
          />
        </button>
      </div>
    </div>
  );
}
