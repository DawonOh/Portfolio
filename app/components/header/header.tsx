import Link from "next/link";
import MobileMenu from "../mobileMenu/mobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 p-4 flexCenter md:flex-col bg-white/60 backdrop-blur-xl border-b border-medium-gray z-50">
      <ul className="md:hidden block w-1/2 md:w-5/4 flex justify-between items-center">
        <li>
          <Link href="/#home">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#skills">Skills</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
      </ul>
      <MobileMenu />
    </header>
  );
}
