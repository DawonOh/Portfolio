import Image from "next/image";
import Link from "next/link";

import Card from "./components/card/card";

import githubLogo from "@/public/assets/icon/github-mark.png";
import pageDownIcon from "@/public/assets/icon/page-down.png";
import Timeline from "./components/timeline/timeline";

interface AboutDataType {
  id: number;
  title: string;
  content?: string;
  link?: string;
  icon?: string;
}

export interface ProjectDataType {
  id: number;
  date: string;
  title: string;
  image: string;
}

export default function Home() {
  const aboutDatas = require("/public/data/about.json");
  const timelineDatas = require("/public/data/timeline.json");
  const projectDate = require("/public/data/projectTitle.json");
  return (
    <main>
      <section className="w-full h-screen">
        <div className="p-20">
          <span>Frontend Developer</span>
          <h1 className="text-8xl font-bold text-main-blue">PORTFOLIO</h1>
          <p className="mb-12 text-3xl font-semibold">
            포기하지 않는 개발자, 오다원입니다.
          </p>
          <Link href="https://github.com/DawonOh" className="inline-block">
            <Image
              src={githubLogo}
              alt="github logo"
              width={30}
              className="inline-block mr-2"
            />
            <span>Github</span>
          </Link>
        </div>
        <div className="w-full h-2 mb-80 bg-main-blue" />
        <div className="flexCenter">
          <Image
            src={pageDownIcon}
            alt="page down icon"
            className="animate-bounce"
          />
        </div>
      </section>
      <section
        id="about"
        className="w-full h-screen flexCenter flex-col bg-light-gray"
      >
        <h2 className="mb-20 text-3xl font-semibold">ABOUT</h2>

        <div className="w-3/5 flexCenter flex-col">
          <div className="w-4/5">
            <div className="mb-2">
              <span className="text-3xl font-semibold mr-2">오다원</span>
              <span>프론트엔드 개발자</span>
            </div>
            <div className="flex gap-2 border-l-2 border-main-blue pl-4 mb-4">
              다른 사람에게 도움이 되는 서비스를 개발하는 개발자가 되기 위해
              노력하고 있습니다.
              <br /> Javascript와 React를 메인으로, 현재는 Next.js를 학습하고
              있습니다.
            </div>
            <div className="flex justify-start items-center gap-8">
              {aboutDatas.map((data: AboutDataType) => (
                <div
                  key={data.id}
                  className="flex justify-between items-center gap-2"
                >
                  {data.icon && (
                    <Image
                      src={data.icon}
                      alt={data.title}
                      width={100}
                      height={100}
                      className="w-auto h-auto"
                    />
                  )}
                  {data.content ? data.content : data.link}
                </div>
              ))}
            </div>
          </div>
          <Timeline timelineDatas={timelineDatas} />
        </div>
      </section>

      <section
        id="projects"
        className="w-full h-screen flexCenter flex-col bg-medium-gray"
      >
        <h2 className="mb-20 text-3xl font-semibold">PROJECTS</h2>
        <div className="grid grid-cols-card justify-around items-center w-3/5 p-8 mx-auto my-0 gap-8">
          {projectDate.map((data: ProjectDataType) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </section>
    </main>
  );
}
