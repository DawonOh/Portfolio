"use client";

import Image from "next/image";
import { useState } from "react";

import menuIcon from "@/public/assets/icon/menu.png";
import menuCloseIcon from "@/public/assets/icon/menu_close.png";
import Link from "next/link";

export default function MobileMenu() {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const menuList = ["Home", "About", "Skills", "Projects"];
  return (
    <>
      <div className="hidden md:flex w-full h-full justify-end items-center cursor-pointer z-50">
        <Image
          src={isMenuOn ? menuCloseIcon : menuIcon}
          alt="메뉴 아이콘"
          onClick={() => {
            setIsMenuOn(!isMenuOn);
          }}
        />
      </div>
      {isMenuOn && (
        <div className="hidden w-full h-screen md:flexCenter md:fixed md:top-0 backdrop-blur-xl bg-white/90">
          <ul className="flexCenter flex-col gap-4 text-2xl font-semibold">
            {menuList.map((str: string, idx) => (
              <li key={idx} className="hover:text-main-blue">
                <Link href={`/#${str.toLowerCase()}`}>{str}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
