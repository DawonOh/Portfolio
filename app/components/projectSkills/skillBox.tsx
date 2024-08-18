"use client";

import { SkillDataArrType } from "@/app/page";
import Image from "next/image";

import downArrowIcon from "@/public/assets/icon/down-arrow.png";
import closeIcon from "@/public/assets/icon/close.png";
import { useState } from "react";
import Badge from "../badge/badge";

export default function SkillBox(props: { data: SkillDataArrType }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div className="w-full flexCenter flex-col gap-2">
        <div className="w-full py-4 px-8 border border-medium-gray rounded-md cursor-pointer">
          <div className="flex justify-between items-center">
            <span>{props.data.category}</span>
            <Image
              src={isOpen ? closeIcon : downArrowIcon}
              alt={isOpen ? "닫기 아이콘" : "열기 아이콘"}
              width={90}
              height={90}
              className="w-5 h-auto"
            />
          </div>
          {isOpen && (
            <div className="flex items-center gap-2 mt-2">
              {props.data.badges.map((badge) => (
                <Badge key={badge.id} title={badge.title} image={badge.image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
