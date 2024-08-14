"use client";

import { SkillDataArrType } from "@/app/page";
import SkillBox from "./skillBox";

export default function ProjectSkills(props: { skills: SkillDataArrType[] }) {
  return (
    <div className="mt-20">
      <h2 className="mb-2 text-2xl font-semibold">SKILLS</h2>
      {props.skills.map((data: SkillDataArrType) => (
        <SkillBox key={data.id} data={data} />
      ))}
    </div>
  );
}
