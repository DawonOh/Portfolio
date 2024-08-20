import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./components/header/header";

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
    <html lang="kr" className={`${pretendard.variable} scroll-smooth`}>
      <body className={pretendard.className}>
        <Header />
        {children}
        <footer className="fixed bottom-0 w-full flex flex-col justify-center items-center bg-dark-gray">
          <span className="text-xl font-semibold">PORTFOLIO</span>
          <span>오다원</span>
        </footer>
      </body>
    </html>
  );
}
