import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "오다원 포트폴리오",
  description: "신입 프론트엔드 개발자 오다원입니다.",
};

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <header className="sticky top-0 p-4 flexCenter bg-white/60 backdrop-blur-xl border-b border-medium-gray">
          <ul className="w-1/2 flex justify-between items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
          </ul>
        </header>
        {children}
        <footer className="flex flex-col justify-center items-center bg-dark-gray">
          <span className="text-xl font-semibold">포트폴리오</span>
          <span>오다원</span>
        </footer>
      </body>
    </html>
  );
}
