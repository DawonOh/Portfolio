"use client";

import Image from "next/image";
import timeline from "@/public/assets/img/timeline.png";
import { useState } from "react";

interface TimelineDataType {
  id: number;
  date: string;
  content: string;
}

export default function Timeline(props: { timelineDatas: TimelineDataType[] }) {
  const [hoverEl, setHoverEl] = useState<number | null>(null);
  const timeLineCircle = () => {
    const result = [];
    for (let i = 0; i < props.timelineDatas.length; i++) {
      result.push(
        <div
          key={i}
          onMouseEnter={() => setHoverEl(i + 1)}
          onMouseOut={() => setHoverEl(null)}
          className="w-4 h-4 rounded-full bg-black hover:bg-main-blue"
        />
      );
    }
    return result;
  };
  return (
    <div className="w-4/5 md:mt-4 mt-20">
      <div className="mb-12 md:hidden">
        <h3 className="text-xl font-semibold pl-4">Time-Line</h3>
        <span className="text-sm text-text-gray pl-4">
          각 점에 마우스를 가져다 대보세요!
        </span>
      </div>
      <Image
        src={timeline}
        alt="timeline"
        className="md:hidden absolute left-1/2 -translate-x-1/2"
      />
      <div className="md:hidden absolute flex gap-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        {timeLineCircle()}
      </div>
      <div className="flex flex-col gap-3 md:mt-4 mt-28">
        {props.timelineDatas.map((data: TimelineDataType) => (
          <div
            key={data.id}
            className={`${
              hoverEl === data.id && "font-bold"
            } pl-8 md:flex md:justify-start md:flex-col md:pl-0`}
          >
            <span className="mr-4 text-text-gray">{data.date}</span>
            <span>{data.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
