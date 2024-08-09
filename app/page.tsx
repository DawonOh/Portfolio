import Image from "next/image";
import Link from "next/link";

import Card from "./components/card/card";
import Timeline from "./components/timeline/timeline";
import Badge from "./components/badge/badge";

import githubLogo from "@/public/assets/icon/github-mark.png";
import pageDownIcon from "@/public/assets/icon/page-down.png";

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

export type SkillDataType = Pick<ProjectDataType, "id" | "title" | "image">;

export default function Home() {
  const aboutDatas = require("/public/data/about.json");
  const timelineDatas = require("/public/data/timeline.json");
  const projectDate = require("/public/data/projectTitle.json");
  const skillData = require("/public/data/skills.json");

  return (
    <main>
      <section id="home" className="w-full h-screen ">
        <div className="p-40">
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
                  className="flex justify-between items-center gap-2 pl-4"
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

      <section id="skills" className="w-full h-screen flexCenter flex-col">
        <h2 className="mb-20 text-3xl font-semibold">SKILLS</h2>
        <div className="flex flex-col justify-center items-start gap-8">
          <div>
            <h3 className="mb-2 text-2xl font-medium">Programing Languages</h3>
            <div className="flexCenter gap-2">
              {skillData[0].map((data: SkillDataType) => (
                <Badge key={data.id} image={data.image} title={data.title} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-medium">Framework/Library</h3>
            <div className="flexCenter gap-2">
              {skillData[1].map((data: SkillDataType) => (
                <Badge key={data.id} image={data.image} title={data.title} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-medium">Tooling/DevOps</h3>
            <div className="flexCenter gap-2">
              {skillData[2].map((data: SkillDataType) => (
                <Badge key={data.id} image={data.image} title={data.title} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-medium">Environment</h3>
            <div className="flexCenter gap-2">
              {skillData[3].map((data: SkillDataType) => (
                <Badge key={data.id} image={data.image} title={data.title} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-medium">ETC</h3>
            <div className="flexCenter gap-2">
              {skillData[4].map((data: SkillDataType) => (
                <Badge key={data.id} image={data.image} title={data.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full h-screen flexCenter flex-col bg-[url('https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div className="w-full h-screen flexCenter flex-col  bg-white/30 backdrop-blur">
          <h2 className="mb-20 text-3xl font-semibold text-white">PROJECTS</h2>
          <div className="grid grid-cols-card justify-around items-center w-3/5 p-8 mx-auto my-0 gap-8">
            {projectDate.map((data: ProjectDataType) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
