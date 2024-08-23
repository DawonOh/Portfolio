import Link from "next/link";
import MobileMenu from "../mobileMenu/mobileMenu";

export interface MenuListType {
  id: number;
  menu: string;
  link: string;
}

export default function Header() {
  const menuList = require("/public/data/menuList.json");
  return (
    <header className="sticky top-0 p-4 flexCenter md:flex-col bg-white/60 backdrop-blur-xl border-b border-medium-gray z-50">
      <ul className="md:hidden block w-1/2 md:w-5/4 flex justify-between items-center">
        {menuList.map((menu: MenuListType) => (
          <li key={menu.id} className="hover:text-main-blue">
            <Link href={menu.link}>{menu.menu}</Link>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </header>
  );
}
