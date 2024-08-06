import Image from "next/image";
import Link from "next/link";

import Card from "./components/card/card";

import githubLogo from "@/assets/icon/github-mark.png";
import pageDownIcon from "@/assets/icon/page-down.png";

interface AboutDataType {
  id: number;
  title: string;
  content?: string;
  link?: string;
}

interface TimelineDataType {
  id: number;
  date: string;
  content: string;
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
      <section className="w-full h-screen p-20 bg-light-gray">
        <h2 id="about">about</h2>
        {aboutDatas.map((data: AboutDataType) => (
          <div key={data.id}>
            {data.title} : {data.content ? data.content : data.link}
          </div>
        ))}
        <div>
          다른 사람에게 도움이 되는 서비스를 개발하는 개발자가 되기 위해
          노력하고 있습니다. 프로젝트 진행 후, 효율적으로 코드를 작성하기 위해
          리팩토링을 진행하였으며, 그 결과 기존 코드 양 대비 10% 이상을 줄일 수
          있었습니다.
        </div>
        <h3>Time-Line</h3>
        <div></div>
        {timelineDatas.map((data: TimelineDataType) => (
          <div key={data.id}>
            <span>{data.date}</span>
            <span>{data.content}</span>
          </div>
        ))}
      </section>

      <section className="w-full h-screen p-20 bg-medium-gray">
        <h2 id="projects">Projects</h2>
        {projectDate.map((data: ProjectDataType) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </main>
  );
}
