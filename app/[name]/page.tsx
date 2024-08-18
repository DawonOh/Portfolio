import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/public/assets/icon/github-mark-white.png";
import { SkillDataArrType } from "../page";
import { notFound } from "next/navigation";
import ProjectSkills from "../components/projectSkills/projectSkills";
import Carousel, { ImageType } from "../components/imageCarousel/carousel";

interface ProjectDetailDataType {
  title: string;
  semiTitle: string;
  description: string;
  startDate: string;
  endDate: string;
  member: string;
  contribution: string;
  githubLink: string;
  skills: SkillDataArrType[];
  images: ImageType[];
}

export default function DetailPage({ params }: { params: { name: string } }) {
  const projectDatas: ProjectDetailDataType = require(`/public/data/projectDetail/${params.name}.json`);

  if (!projectDatas) {
    notFound();
  }

  return (
    <main className="w-full h-screen">
      <div className="p-40">
        <div>
          <h1 className="text-6xl font-bold text-main-blue">
            {projectDatas.title}
          </h1>
          <p className="mb-24 text-2xl font-semibold">
            {projectDatas.semiTitle}
          </p>
        </div>
        <div className="mb-16">
          <h2 className="mb-2 text-2xl font-semibold">프로젝트 소개</h2>
          {projectDatas.description.split("/").map((str: string, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="mb-2 text-xl font-semibold">기간 및 인원</h3>
          <span>
            기간 : {projectDatas.startDate} ~ {projectDatas.endDate}
          </span>
          <span>
            인원 : {projectDatas.member} (기여도 : {projectDatas.contribution}%)
          </span>
        </div>
        <Link href={projectDatas.githubLink} className="inline-block">
          <button className="flexCenter gap-2 py-1 px-6 bg-black text-white rounded-xl">
            <Image
              src={githubIcon}
              alt="github icon"
              width={10}
              height={10}
              className="w-auto h-auto"
            />
            Github
          </button>
        </Link>
        <ProjectSkills skills={projectDatas.skills} />
        <Carousel images={projectDatas.images} />
      </div>
    </main>
  );
}
